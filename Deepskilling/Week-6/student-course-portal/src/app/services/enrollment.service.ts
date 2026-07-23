import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of, throwError } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Course } from '../models/course.model';
import { CourseService } from './course.service';

interface Enrollment {
  id?: string | number;
  courseId: number;
}

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private apiUrl = 'http://localhost:3000/enrollments';

  constructor(
    private http: HttpClient,
    private courseService: CourseService
  ) {}

  getEnrollments(): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(this.apiUrl).pipe(
      catchError(() => of([]))
    );
  }

  getEnrolledCourses(): Observable<Course[]> {
    return this.getEnrollments().pipe(
      switchMap(enrollments => {
        if (enrollments.length === 0) {
          return of([]);
        }
        return this.courseService.getCourses().pipe(
          map(courses => {
            const enrolledIds = enrollments.map(e => e.courseId);
            return courses.filter(c => enrolledIds.includes(c.id));
          })
        );
      })
    );
  }

  enroll(courseId: number): Observable<any> {
    return this.getEnrollments().pipe(
      switchMap(enrollments => {
        const exists = enrollments.find(e => e.courseId === courseId);
        if (exists) {
          return of(exists);
        }
        return this.http.post<Enrollment>(this.apiUrl, { courseId });
      }),
      catchError(err => {
        console.error('Error enrolling in course:', err);
        return throwError(() => new Error('Failed to enroll in course.'));
      })
    );
  }

  unenroll(courseId: number): Observable<any> {
    return this.getEnrollments().pipe(
      switchMap(enrollments => {
        const found = enrollments.find(e => e.courseId === courseId);
        if (!found) {
          return of(null);
        }
        return this.http.delete(`${this.apiUrl}/${found.id}`);
      }),
      catchError(err => {
        console.error('Error unenrolling from course:', err);
        return throwError(() => new Error('Failed to unenroll from course.'));
      })
    );
  }

  isEnrolled(courseId: number): Observable<boolean> {
    return this.getEnrollments().pipe(
      map(enrollments => enrollments.some(e => e.courseId === courseId))
    );
  }

  // Chaining switchMap demo: get enrolled students list for a course
  getStudentsByCourse(courseId: number): Observable<string[]> {
    return this.http.get<any[]>(`http://localhost:3000/students`).pipe(
      map(students => {
        // Simple mock matching: return student names that are enrolled in the courseId
        // In db.json, we can link them
        return students
          .filter(student => student.enrolledCourses && student.enrolledCourses.includes(courseId))
          .map(student => student.name);
      }),
      catchError(() => of(['Alice Smith', 'Bob Johnson'])) // fallback mocks
    );
  }
}

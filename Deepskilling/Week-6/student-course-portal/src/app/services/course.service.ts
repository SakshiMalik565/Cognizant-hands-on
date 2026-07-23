import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl).pipe(
      // Filter out courses without credits (as requested in Hands-On 8 Task 2 step 83)
      map(courses => courses.filter(c => c.credits > 0)),
      tap(courses => console.log('Courses loaded from API:', courses.length)),
      retry(2), // Retry 2 times before throwing error
      catchError(err => {
        console.error('Error fetching courses:', err);
        return throwError(() => new Error('Failed to load courses. Please try again.'));
      })
    );
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`).pipe(
      tap(course => console.log(`Course ${id} loaded:`, course)),
      catchError(err => {
        console.error(`Error fetching course ${id}:`, err);
        return throwError(() => new Error(`Failed to load course details for ID ${id}.`));
      })
    );
  }

  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course).pipe(
      tap(newCourse => console.log('Course created:', newCourse)),
      catchError(err => {
        console.error('Error creating course:', err);
        return throwError(() => new Error('Failed to create course.'));
      })
    );
  }

  updateCourse(course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/${course.id}`, course).pipe(
      tap(updated => console.log('Course updated:', updated)),
      catchError(err => {
        console.error('Error updating course:', err);
        return throwError(() => new Error('Failed to update course.'));
      })
    );
  }

  deleteCourse(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      tap(() => console.log(`Course ${id} deleted`)),
      catchError(err => {
        console.error('Error deleting course:', err);
        return throwError(() => new Error('Failed to delete course.'));
      })
    );
  }
}

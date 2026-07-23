import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { Course } from '../../models/course.model';
import { Observable, Subscription, of } from 'rxjs';
import { switchMap, catchError, tap } from 'rxjs/operators';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, CreditLabelPipe],
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit, OnDestroy {
  courseId: number | null = null;
  course: Course | null = null;
  enrolledStudents$: Observable<string[]> = of([]);
  loading = true;
  errorMsg = '';

  private sub = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {
    // Read the parameter and chain HTTP calls using switchMap
    // NOTE: switchMap is ideal here because if the courseId parameter changes rapidly
    // (e.g. user clicks another course before the students API completes), 
    // switchMap will cancel the previous pending request and only listen to the latest one.
    this.sub.add(
      this.route.paramMap.pipe(
        tap(params => {
          this.loading = true;
          this.errorMsg = '';
          const idStr = params.get('id');
          this.courseId = idStr ? Number(idStr) : null;
        }),
        switchMap(params => {
          const idStr = params.get('id');
          if (!idStr) {
            return of(null);
          }
          return this.courseService.getCourseById(Number(idStr)).pipe(
            catchError(err => {
              this.errorMsg = err.message || 'Failed to load course details.';
              this.loading = false;
              return of(null);
            })
          );
        })
      ).subscribe(courseData => {
        this.course = courseData;
        this.loading = false;
        
        if (this.courseId) {
          // Chain another call to load enrolled students using switchMap (as requested in step 87)
          this.enrolledStudents$ = this.route.paramMap.pipe(
            switchMap(params => {
              const idStr = params.get('id');
              return this.enrollmentService.getStudentsByCourse(Number(idStr));
            })
          );
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

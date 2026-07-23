import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription, combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from '../../models/course.model';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { selectAllCourses, selectCoursesLoading, selectCoursesError } from '../../store/course/course.selectors';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';
import { loadCourses } from '../../store/course/course.actions';
import { enrollInCourse, unenrollFromCourse } from '../../store/enrollment/enrollment.actions';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnDestroy {
  courses$: Observable<Course[]> = of([]);
  filteredCourses$: Observable<Course[]> = of([]);
  loading$: Observable<boolean> = of(true);
  error$: Observable<string | null> = of(null);
  enrolledIds$: Observable<number[]> = of([]);

  searchTerm = '';
  // Simulated loading indicator delay (Hands-On 3 Task 1 step 25)
  simulatedLoading = true;

  private subs = new Subscription();

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // 1. Dispatch action to load courses via store (Hands-On 9 step 96)
    this.store.dispatch(loadCourses());

    // 2. Map store selectors
    this.loading$ = this.store.select(selectCoursesLoading);
    this.error$ = this.store.select(selectCoursesError);
    this.courses$ = this.store.select(selectAllCourses);
    this.enrolledIds$ = this.store.select(selectEnrolledIds);

    // 3. Read search query parameter from URL (Hands-On 7 step 71)
    const initSearch = this.route.snapshot.queryParamMap.get('search');
    if (initSearch) {
      this.searchTerm = initSearch;
    }

    // 4. Combine courses and search term to create filtered stream
    this.filteredCourses$ = combineLatest([this.courses$, this.route.queryParams]).pipe(
      map(([courses, params]) => {
        const query = (params['search'] || '').toLowerCase().trim();
        if (!query) {
          return courses;
        }
        return courses.filter(c => 
          c.name.toLowerCase().includes(query) || 
          c.code.toLowerCase().includes(query)
        );
      })
    );

    // 5. Simulated Loading indicator timeout (1.5 seconds)
    setTimeout(() => {
      this.simulatedLoading = false;
    }, 1500);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  // search query update with URL router navigation
  onSearchChange() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { search: this.searchTerm || null },
      queryParamsHandling: 'merge'
    });
  }

  // trackBy performance optimization (Hands-On 3 Task 1 step 26)
  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  // handle enrollment requested action via dispatching actions to NgRx store
  onEnroll(courseId: number) {
    this.store.dispatch(enrollInCourse({ courseId }));
  }

  onUnenroll(courseId: number) {
    this.store.dispatch(unenrollFromCourse({ courseId }));
  }

  onCardClick(courseId: number) {
    this.router.navigate(['/courses', courseId]);
  }
}

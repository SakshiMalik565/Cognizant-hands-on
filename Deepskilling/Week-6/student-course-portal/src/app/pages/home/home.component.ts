import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectAllCourses } from '../../store/course/course.selectors';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';
import { loadCourses } from '../../store/course/course.actions';
import { NotificationComponent } from '../../components/notification/notification.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, NotificationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  // interpolation
  portalName = 'Student Course Portal';
  // property binding
  isPortalActive = true;
  // event binding message
  message = '';
  // two-way binding
  searchTerm = '';

  coursesCount = 0;
  enrolledCount = 0;
  gpa = 3.8;

  private subs = new Subscription();

  ngOnInit(): void {
    console.log('HomeComponent initialised — courses loading');
    // Dispatch loading courses to populate stats
    this.store.dispatch(loadCourses());

    this.subs.add(
      this.store.select(selectAllCourses).subscribe(courses => {
        this.coursesCount = courses.length;
      })
    );

    this.subs.add(
      this.store.select(selectEnrolledIds).subscribe(enrolled => {
        this.enrolledCount = enrolled.length;
      })
    );
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
    this.subs.unsubscribe();
  }

  constructor(private store: Store) {}

  onEnrollClick() {
    this.message = 'Enrollment opened! Navigate to the Courses or Enroll tab to get started.';
  }
}

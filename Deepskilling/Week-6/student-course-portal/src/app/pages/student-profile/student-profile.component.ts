import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Course } from '../../models/course.model';
import { selectEnrolledCourses } from '../../store/enrollment/enrollment.selectors';
import { loadCourses } from '../../store/course/course.actions';
import { unenrollFromCourse } from '../../store/enrollment/enrollment.actions';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, CreditLabelPipe],
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  studentName = 'Alex Mercer';
  studentEmail = 'alex.mercer@university.edu';
  studentId = 'STU-984321';
  major = 'Software Engineering';

  enrolledCourses$: Observable<Course[]> = of([]);

  constructor(private store: Store) {}

  ngOnInit(): void {
    // Make sure courses are loaded in store to resolve joined details
    this.store.dispatch(loadCourses());
    
    // Select enrolled courses using NgRx cross-slice memoized selector (Hands-On 9 step 99)
    this.enrolledCourses$ = this.store.select(selectEnrolledCourses);
  }

  onUnenroll(courseId: number) {
    this.store.dispatch(unenrollFromCourse({ courseId }));
  }
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EnrollmentService } from '../../services/enrollment.service';
import * as EnrollmentActions from './enrollment.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class EnrollmentEffects {
  enrollInCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EnrollmentActions.enrollInCourse),
      switchMap(({ courseId }) =>
        this.enrollmentService.enroll(courseId).pipe(
          map(() => EnrollmentActions.enrollInCourseSuccess({ courseId })),
          catchError(error => of(EnrollmentActions.enrollInCourseFailure({ error: error.message })))
        )
      )
    )
  );

  unenrollFromCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EnrollmentActions.unenrollFromCourse),
      switchMap(({ courseId }) =>
        this.enrollmentService.unenroll(courseId).pipe(
          map(() => EnrollmentActions.unenrollFromCourseSuccess({ courseId })),
          catchError(error => of(EnrollmentActions.unenrollFromCourseFailure({ error: error.message })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private enrollmentService: EnrollmentService
  ) {}
}

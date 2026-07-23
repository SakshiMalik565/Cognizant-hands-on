import { createAction, props } from '@ngrx/store';

export const enrollInCourse = createAction(
  '[Enrollment] Enroll In Course',
  props<{ courseId: number }>()
);

export const enrollInCourseSuccess = createAction(
  '[Enrollment] Enroll In Course Success',
  props<{ courseId: number }>()
);

export const enrollInCourseFailure = createAction(
  '[Enrollment] Enroll In Course Failure',
  props<{ error: string }>()
);

export const unenrollFromCourse = createAction(
  '[Enrollment] Unenroll From Course',
  props<{ courseId: number }>()
);

export const unenrollFromCourseSuccess = createAction(
  '[Enrollment] Unenroll From Course Success',
  props<{ courseId: number }>()
);

export const unenrollFromCourseFailure = createAction(
  '[Enrollment] Unenroll From Course Failure',
  props<{ error: string }>()
);

export const setEnrolledCourses = createAction(
  '[Enrollment] Set Enrolled Courses',
  props<{ enrolledCourseIds: number[] }>()
);

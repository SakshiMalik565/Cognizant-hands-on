import { createReducer, on } from '@ngrx/store';
import * as EnrollmentActions from './enrollment.actions';

export interface EnrollmentState {
  enrolledCourseIds: number[];
  error: string | null;
}

export const initialEnrollmentState: EnrollmentState = {
  enrolledCourseIds: [],
  error: null
};

export const enrollmentReducer = createReducer(
  initialEnrollmentState,
  on(EnrollmentActions.setEnrolledCourses, (state, { enrolledCourseIds }) => ({
    ...state,
    enrolledCourseIds,
    error: null
  })),
  on(EnrollmentActions.enrollInCourseSuccess, (state, { courseId }) => ({
    ...state,
    enrolledCourseIds: [...state.enrolledCourseIds, courseId],
    error: null
  })),
  on(EnrollmentActions.unenrollFromCourseSuccess, (state, { courseId }) => ({
    ...state,
    enrolledCourseIds: state.enrolledCourseIds.filter(id => id !== courseId),
    error: null
  })),
  on(EnrollmentActions.enrollInCourseFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(EnrollmentActions.unenrollFromCourseFailure, (state, { error }) => ({
    ...state,
    error
  }))
);

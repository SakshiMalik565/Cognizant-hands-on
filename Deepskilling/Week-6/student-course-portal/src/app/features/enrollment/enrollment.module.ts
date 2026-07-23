import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentRoutingModule } from './enrollment-routing.module';
import { EnrollmentFormComponent } from './enrollment-form/enrollment-form.component';
import { ReactiveEnrollmentFormComponent } from './reactive-enrollment-form/reactive-enrollment-form.component';

@NgModule({
  imports: [
    CommonModule,
    EnrollmentRoutingModule,
    EnrollmentFormComponent,
    ReactiveEnrollmentFormComponent
  ]
})
export class EnrollmentModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollmentFormComponent } from './enrollment-form/enrollment-form.component';
import { ReactiveEnrollmentFormComponent } from './reactive-enrollment-form/reactive-enrollment-form.component';
import { unsavedChangesGuard } from '../../guards/unsaved-changes.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'template',
    pathMatch: 'full'
  },
  {
    path: 'template',
    component: EnrollmentFormComponent
  },
  {
    path: 'reactive',
    component: ReactiveEnrollmentFormComponent,
    canDeactivate: [unsavedChangesGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrollmentRoutingModule {}

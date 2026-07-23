import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './enrollment-form.component.html',
  styleUrls: ['./enrollment-form.component.css']
})
export class EnrollmentFormComponent {
  studentName = '';
  studentEmail = '';
  courseId: number | null = null;
  preferredSemester = 'Odd';
  agreeToTerms = false;

  submitted = false;

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Template Form Value:', form.value);
      console.log('Template Form Validity:', form.valid);
      this.submitted = true;
    }
  }

  onReset(form: NgForm) {
    form.resetForm({
      preferredSemester: 'Odd',
      agreeToTerms: false
    });
    this.submitted = false;
  }
}

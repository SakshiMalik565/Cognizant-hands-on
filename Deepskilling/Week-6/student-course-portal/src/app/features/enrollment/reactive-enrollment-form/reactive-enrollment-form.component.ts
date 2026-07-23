import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  ValidationErrors,
  FormControl
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from '../../../guards/unsaved-changes.guard';

// Custom validator function (Hands-On 5 Task 2 step 53)
export function noCourseCode(control: AbstractControl): ValidationErrors | null {
  const val = String(control.value || '').toUpperCase();
  if (val.startsWith('XX')) {
    return { noCourseCode: true };
  }
  return null;
}

// Custom Async validator function (Hands-On 5 Task 2 step 55)
export function simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const email = String(control.value || '').toLowerCase();
      if (email.includes('test@')) {
        resolve({ emailTaken: true });
      } else {
        resolve(null);
      }
    }, 800);
  });
}

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './reactive-enrollment-form.component.html',
  styleUrls: ['./reactive-enrollment-form.component.css']
})
export class ReactiveEnrollmentFormComponent implements OnInit, CanComponentDeactivate {
  enrollForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Scaffold reactive form group (Hands-On 5 Task 1 step 49)
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: ['', [Validators.required, Validators.email], [simulateEmailCheck]],
      courseId: ['', [Validators.required, noCourseCode]],
      preferredSemester: ['Odd', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],
      additionalCourses: this.fb.array([]) // FormArray for repeating controls (step 56)
    });
  }

  // Typed getter for dynamic FormArray (step 57)
  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  addCourse() {
    this.additionalCourses.push(this.fb.control('', Validators.required));
  }

  removeCourse(index: number) {
    this.additionalCourses.removeAt(index);
  }

  onSubmit() {
    if (this.enrollForm.valid) {
      console.log('Reactive Form Value:', this.enrollForm.value);
      console.log('Reactive Form Raw Value:', this.enrollForm.getRawValue());
      this.submitted = true;
    }
  }

  onReset() {
    this.enrollForm.reset({
      studentName: '',
      studentEmail: '',
      courseId: '',
      preferredSemester: 'Odd',
      agreeToTerms: false
    });
    this.additionalCourses.clear();
    this.submitted = false;
  }

  // canDeactivate Route Guard check (Hands-On 7 Task 2 step 77)
  canDeactivate(): boolean {
    if (this.enrollForm.dirty && !this.submitted) {
      return window.confirm('You have unsaved changes. Leave?');
    }
    return true;
  }
}

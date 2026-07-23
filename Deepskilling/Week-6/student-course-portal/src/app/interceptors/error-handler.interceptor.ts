import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error) => {
      if (error.status === 401) {
        console.warn('Unauthorized request. Redirecting to root page...');
        router.navigate(['/']);
      } else if (error.status === 500) {
        console.error('Internal Server Error (500). Please contact support.');
        alert('Server Error (500): Something went wrong on the server.');
      }
      return throwError(() => error);
    })
  );
};

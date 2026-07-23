import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { CourseService } from './course.service';
import { Course } from '../models/course.model';
import { expect } from 'vitest';

describe('CourseService', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;

  const mockCourses: Course[] = [
    { id: 1, name: 'Course 1', code: 'CS101', credits: 3, gradeStatus: 'passed' },
    { id: 2, name: 'Course 2', code: 'CS102', credits: 4, gradeStatus: 'pending' }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CourseService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve courses and filter credits > 0', () => {
    service.getCourses().subscribe(courses => {
      expect(courses.length).toBe(2);
      expect(courses[0].name).toBe('Course 1');
    });

    const req = httpMock.expectOne('http://localhost:3000/courses');
    expect(req.request.method).toBe('GET');
    req.flush(mockCourses);
  });

  it('should handle HTTP error 500 gracefully with retries', () => {
    let errorReceived = false;
    service.getCourses().subscribe({
      next: () => {
        throw new Error('Expected an error, but got courses success response');
      },
      error: (err) => {
        expect(err.message).toContain('Failed to load courses. Please try again.');
        errorReceived = true;
      }
    });

    // Since CourseService.getCourses has retry(2), we flush sequentially:
    // 1st request fails, triggering 1st retry
    const req1 = httpMock.expectOne('http://localhost:3000/courses');
    req1.flush('Internal Server Error', { status: 500, statusText: 'Server Error' });

    // 2nd request fails, triggering 2nd retry
    const req2 = httpMock.expectOne('http://localhost:3000/courses');
    req2.flush('Internal Server Error', { status: 500, statusText: 'Server Error' });

    // 3rd request fails, propagating the final error to subscription
    const req3 = httpMock.expectOne('http://localhost:3000/courses');
    req3.flush('Internal Server Error', { status: 500, statusText: 'Server Error' });

    expect(errorReceived).toBe(true);
  });
});

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CourseCardComponent } from './course-card.component';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';
import { vi } from 'vitest';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  const mockCourse = {
    id: 1,
    name: 'Data Structures',
    code: 'CS101',
    credits: 4,
    gradeStatus: 'passed' as const
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render course title from @Input', () => {
    component.course = mockCourse;
    fixture.detectChanges();
    
    const titleElement = fixture.debugElement.query(By.css('.course-title')).nativeElement;
    expect(titleElement.textContent).toContain('Data Structures');
  });

  it('should emit course id when enroll button is clicked', () => {
    component.course = mockCourse;
    component.enrolled = false;
    fixture.detectChanges();

    const emitSpy = vi.spyOn(component.enrollRequested, 'emit');

    const enrollBtn = fixture.debugElement.query(By.css('.btn--primary')).nativeElement;
    enrollBtn.click();
    fixture.detectChanges();

    expect(emitSpy).toHaveBeenCalledWith(1);
  });

  it('should log changes on ngOnChanges', () => {
    const logSpy = vi.spyOn(console, 'log');

    component.ngOnChanges({
      course: new SimpleChange(null, mockCourse, true)
    });

    expect(logSpy).toHaveBeenCalled();
  });
});

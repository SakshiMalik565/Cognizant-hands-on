import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CourseListComponent } from './course-list.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { provideRouter } from '@angular/router';
import { By } from '@angular/platform-browser';
import { Course } from '../../models/course.model';

describe('CourseListComponent (NgRx Connected)', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let store: MockStore;

  const mockCourses: Course[] = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Algorithms Design', code: 'CS201', credits: 4, gradeStatus: 'pending' }
  ];

  const initialState = {
    course: {
      courses: mockCourses,
      loading: false,
      error: null
    },
    enrollment: {
      enrolledCourseIds: [],
      error: null
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseListComponent],
      providers: [
        provideMockStore({ initialState }),
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    
    // Disable simulated loading timeout during tests to test state changes instantly
    component.simulatedLoading = false; 
  });

  // Task 2 step 109: MockStore validation test
  it('should render course cards based on store initial state', () => {
    fixture.detectChanges();

    const cardElements = fixture.debugElement.queryAll(By.css('app-course-card'));
    expect(cardElements.length).toBe(2);

    const titleEl = cardElements[0].query(By.css('.course-title')).nativeElement;
    expect(titleEl.textContent).toContain('Data Structures');
  });

  // Task 2 step 110: store.setState loading indicator test
  it('should show loading indicator when store state is loading', () => {
    store.setState({
      course: {
        courses: [],
        loading: true,
        error: null
      },
      enrollment: {
        enrolledCourseIds: [],
        error: null
      }
    });

    fixture.detectChanges();

    const loadingEl = fixture.debugElement.query(By.css('.loading-container'));
    expect(loadingEl).toBeTruthy();
    expect(loadingEl.nativeElement.textContent).toContain('Loading course catalogue...');
  });
});

import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';
import { HighlightDirective } from '../../directives/highlight.directive';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, HighlightDirective, CreditLabelPipe],
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnChanges {
  @Input() course!: Course;
  @Input() enrolled = false;

  @Output() enrollRequested = new EventEmitter<number>();
  @Output() unenrollRequested = new EventEmitter<number>();
  @Output() cardClicked = new EventEmitter<number>();

  isExpanded = false;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('CourseCardComponent changes observed:', changes);
  }

  get cardClasses() {
    return {
      'card--enrolled': this.enrolled,
      'card--full': this.course ? this.course.credits >= 4 : false,
      'card--expanded': this.isExpanded
    };
  }

  get borderStyle() {
    if (!this.course) return {};
    let color = '#64748b'; // pending / default
    if (this.course.gradeStatus === 'passed') {
      color = '#10b981'; // green
    } else if (this.course.gradeStatus === 'failed') {
      color = '#ef4444'; // red
    }
    return { 'border-left': `5px solid ${color}` };
  }

  toggleExpand(event: Event) {
    event.stopPropagation();
    this.isExpanded = !this.isExpanded;
  }

  onEnrollClick(event: Event) {
    event.stopPropagation();
    if (this.enrolled) {
      this.unenrollRequested.emit(this.course.id);
    } else {
      this.enrollRequested.emit(this.course.id);
    }
  }

  onCardClick() {
    this.cardClicked.emit(this.course.id);
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';

/**
 * Hierarchical Dependency Injection Demonstration Component.
 * 
 * NOTE: By placing `NotificationService` in the `providers` array of this component,
 * we tell Angular's Dependency Injection system to create a new instance of the service
 * dedicated to this component branch (this component and any children it has).
 * Any other instance of NotificationComponent will get its own separate singleton instance of 
 * NotificationService, isolating their states. If provided at the root instead, all components 
 * would share the same single instance.
 */
@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [NotificationService],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  newNotification = '';

  constructor(public notificationService: NotificationService) {}

  addMessage() {
    if (this.newNotification.trim()) {
      this.notificationService.addNotification(this.newNotification.trim());
      this.newNotification = '';
    }
  }
}

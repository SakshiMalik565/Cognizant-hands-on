import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {
  private notifications: string[] = [];

  getNotifications() {
    return this.notifications;
  }

  addNotification(message: string) {
    this.notifications.push(message);
  }
}

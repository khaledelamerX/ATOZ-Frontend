import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { NotificationService, Notification } from '../services/notification.service';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed bottom-6 left-6 flex flex-col gap-3 z-50">
      <div *ngFor="let n of items" class="px-4 py-2 rounded shadow-lg text-white" [ngClass]="{
        'bg-green-600': n.type === 'success',
        'bg-red-600': n.type === 'error',
        'bg-blue-600': n.type === 'info'
      }">{{n.message}}</div>
    </div>
  `
})
export class NotificationComponent implements OnDestroy {
  items: Notification[] = [];
  sub: Subscription;
  constructor(private svc: NotificationService) {
    this.sub = this.svc.notifications$.subscribe(n => {
      this.items.push(n);
      setTimeout(() => {
        this.items = this.items.filter(x => x !== n);
      }, 4500);
    });
  }
  ngOnDestroy() { this.sub.unsubscribe(); }
}

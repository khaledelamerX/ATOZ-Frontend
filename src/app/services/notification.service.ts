import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Notification {
  type: 'success' | 'error' | 'info';
  message: string;
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private bus = new Subject<Notification>();
  notifications$ = this.bus.asObservable();

  showSuccess(message: string) { this.bus.next({ type: 'success', message }); }
  showError(message: string) { this.bus.next({ type: 'error', message }); }
  showInfo(message: string) { this.bus.next({ type: 'info', message }); }
}

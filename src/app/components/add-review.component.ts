import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MockDataService } from '../services/mock-data.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-add-review',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="container-max mx-auto py-12">
      <div class="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
        <h2 class="text-2xl font-bold mb-4">أضف تقييمك</h2>
        <form (ngSubmit)="submit()">
          <label class="block mb-3">
            <span class="text-sm">الاسم</span>
            <input [(ngModel)]="name" name="name" required class="w-full border px-3 py-2 rounded mt-1" />
          </label>

          <label class="block mb-3">
            <span class="text-sm">التعليق</span>
            <textarea [(ngModel)]="message" name="message" required rows="4" class="w-full border px-3 py-2 rounded mt-1"></textarea>
          </label>

          <label class="block mb-3">
            <span class="text-sm">التقييم</span>
            <select [(ngModel)]="rating" name="rating" class="w-full border px-3 py-2 rounded mt-1">
              <option value="5">5 - ممتاز</option>
              <option value="4">4 - جيد جداً</option>
              <option value="3">3 - جيد</option>
              <option value="2">2 - متوسط</option>
              <option value="1">1 - ضعيف</option>
            </select>
          </label>

          <div class="flex gap-3 mt-4">
            <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded">إرسال التقييم</button>
            <button type="button" (click)="cancel()" class="px-4 py-2 border rounded">إلغاء</button>
          </div>
        </form>
      </div>
    </section>
  `
})
export class AddReviewComponent {
  name = '';
  message = '';
  rating = 5;
  constructor(private mock: MockDataService, private notify: NotificationService, private router: Router) {}

  submit() {
    if (!this.name || !this.message) {
      this.notify.showError('يرجى ملء جميع الحقول');
      return;
    }
    this.mock.addFeedback({ name: this.name, message: this.message, rating: this.rating });
    this.notify.showSuccess('تم إضافة تقييمك، شكراً لك!');
    this.router.navigate(['/']);
  }

  cancel() { this.router.navigate(['/']); }
}

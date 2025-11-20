import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="max-w-md mx-auto my-12 bg-white p-6 rounded-lg shadow">
      <h2 class="text-2xl font-semibold mb-4">إنشاء حساب</h2>
      <form (ngSubmit)="submit()">
        <label class="block mb-2">الاسم
          <input [(ngModel)]="name" name="name" required class="w-full border px-3 py-2 rounded mt-1" />
        </label>
        <label class="block mb-2">البريد الإلكتروني
          <input [(ngModel)]="email" name="email" required class="w-full border px-3 py-2 rounded mt-1" />
        </label>
        <label class="block mb-2">كلمة المرور
          <input [(ngModel)]="password" name="password" type="password" required class="w-full border px-3 py-2 rounded mt-1" />
        </label>
        <div class="flex gap-2 mt-4">
          <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded">إنشاء</button>
          <a routerLink="/signin" class="px-4 py-2 border rounded">تسجيل الدخول</a>
        </div>
      </form>
    </div>
  `
})
export class SignupComponent {
  name = '';
  email = '';
  password = '';
  constructor(private router: Router, private notify: NotificationService) {}
  submit() {
    // Mock signup
    this.notify.showSuccess('تم إنشاء الحساب بنجاح');
    this.router.navigate(['/']);
  }
}

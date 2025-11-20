import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="py-12 container-max mx-auto">
      <h2 class="text-2xl font-semibold mb-4">تواصل معنا</h2>
      <form (submit)="onSubmit($event)" class="grid grid-cols-1 gap-4 max-w-xl">
        <label class="flex flex-col">
          <span class="text-sm text-gray-700">الاسم</span>
          <input name="name" class="mt-1 p-2 border rounded-md" />
        </label>
        <label class="flex flex-col">
          <span class="text-sm text-gray-700">البريد</span>
          <input name="email" type="email" class="mt-1 p-2 border rounded-md" />
        </label>
        <label class="flex flex-col">
          <span class="text-sm text-gray-700">الرسالة</span>
          <textarea name="message" class="mt-1 p-2 border rounded-md h-32"></textarea>
        </label>
        <div>
          <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-md">ارسل</button>
        </div>
      </form>
    </section>
  `,
  styles: []
})
export class ContactComponent {
  onSubmit(e: Event) {
    e.preventDefault();
    alert('تم إرسال النموذج (محاكاة)');
  }
}

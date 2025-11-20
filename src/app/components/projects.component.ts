import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  template: `
    <section class="py-12 container-max mx-auto">
      <h2 class="text-2xl font-semibold mb-6">أعمالنا السابقة</h2>
      <p class="text-gray-600 mb-8">نماذج مختارة من مشاريعنا التي توضح جودة التنفيذ والمواد المستخدمة.</p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <a routerLink="/projects" class="block bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-transform hover:scale-102 animate-fade-up" style="animation-delay:0ms">
          <div class="relative h-40 overflow-hidden">
            <img src="assets/demo-1.svg" alt="فيلا راقية" class="w-full h-40 object-cover"/>
            <div class="card-caption">
              <div class="font-semibold">فيلا راقية - التشطيب الكامل</div>
              <div class="text-sm">مواد فاخرة وتنفيذ دقيق</div>
            </div>
          </div>
          <div class="p-4">
            <div class="text-sm text-gray-500">عرض تفصيلي للمشروع عند الضغط</div>
          </div>
        </a>

        <a routerLink="/projects" class="block bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-transform hover:scale-102 animate-fade-up" style="animation-delay:90ms">
          <div class="relative h-40 overflow-hidden">
            <img src="assets/demo-2.svg" alt="مكتب إداري" class="w-full h-40 object-cover"/>
            <div class="card-caption">
              <div class="font-semibold">مكتب إداري - تصميم حديث</div>
              <div class="text-sm">تحسين المساحات وتجربة المستخدم</div>
            </div>
          </div>
          <div class="p-4">
            <div class="text-sm text-gray-500">حلول تنفيذية تناسب بيئة العمل</div>
          </div>
        </a>

        <a routerLink="/projects" class="block bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-transform hover:scale-102 animate-fade-up" style="animation-delay:180ms">
          <div class="relative h-40 overflow-hidden">
            <img src="assets/demo-3.svg" alt="شقة نموذجية" class="w-full h-40 object-cover"/>
            <div class="card-caption">
              <div class="font-semibold">شقة نموذجية - إعادة تشطيب</div>
              <div class="text-sm">تفاصيل تنفيذ عملية ومواد متينة</div>
            </div>
          </div>
          <div class="p-4">
            <div class="text-sm text-gray-500">ملف المشروع يحتوي على صور ومراحل التنفيذ</div>
          </div>
        </a>
      </div>
    </section>
  `,
  styles: []
})
export class ProjectsComponent {}

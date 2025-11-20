import { Component } from '@angular/core';
import { NewsCardComponent } from './news-card.component';

@Component({
  selector: 'app-news',
  imports: [NewsCardComponent],
  template: `
    <section class="py-12 container-max mx-auto">
      <h2 class="text-2xl font-semibold mb-6">أخبار الشركة</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <app-news-card title="افتتاح فرع جديد" summary="افتتحنا فرعًا جديدًا لخدماتنا في منطقة جديدة." img="assets/demo-1.svg" link="/news/1"></app-news-card>
        <app-news-card title="جائزة التميز" summary="حصد فريقنا جائزة التميز في التشطيبات لعام 2025." img="assets/demo-2.svg" link="/news/2"></app-news-card>
        <app-news-card title="مشروع نجح" summary="انتهى مشروع سكني بمستوى عالي من الجودة ورضا العميل." img="assets/demo-3.svg" link="/news/3"></app-news-card>
      </div>
    </section>
  `,
  styles: []
})
export class NewsComponent{}

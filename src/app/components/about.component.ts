import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section class="py-12 container-max mx-auto">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 class="text-3xl font-bold mb-4">عن ATOZ</h2>
          <p class="text-gray-600 mb-4">شركة متخصصة في التصميم المعماري والتشطيبات التنفيذية، نعمل على تقديم حلول متكاملة منذ الفكرة حتى التسليم.</p>
          <h3 class="font-semibold mb-2">رؤيتنا</h3>
          <p class="text-gray-600 mb-4">أن نصبح الخيار الأول في السوق المحلي للمشاريع السكنية والتجارية من خلال الجودة والالتزام.</p>
          <h3 class="font-semibold mb-2">قيمنا</h3>
          <ul class="text-gray-600 list-disc pl-6">
            <li>جودة التنفيذ</li>
            <li>الالتزام بالمواعيد</li>
            <li>شفافية التكلفة</li>
          </ul>
        </div>
        <div>
          <img src="assets/demo-2.svg" alt="about" class="w-full rounded-lg shadow-md"/>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class AboutComponent{}

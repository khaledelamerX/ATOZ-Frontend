import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  template: `
    <section class="py-12 container-max mx-auto">
      <h2 class="text-2xl font-semibold mb-4">خدماتنا</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="p-4 bg-white rounded-lg shadow animate-fade-up" style="animation-delay:0ms">
          <div class="font-semibold mb-1">تصميم معماري</div>
          <div class="text-sm text-gray-600">تصاميم مستجيبة ومبتكرة تتماشى مع متطلبات العملاء.</div>
        </div>
        <div class="p-4 bg-white rounded-lg shadow animate-fade-up" style="animation-delay:80ms">
          <div class="font-semibold mb-1">تشطيبات داخلية وخارجية</div>
          <div class="text-sm text-gray-600">تشطيبات عالية الجودة مع خيارات مواد متعددة.</div>
        </div>
        <div class="p-4 bg-white rounded-lg shadow animate-fade-up" style="animation-delay:160ms">
          <div class="font-semibold mb-1">إدارة مشاريع</div>
          <div class="text-sm text-gray-600">تحليل جداول زمنية، مراقبة جودة، وتسليم في الوقت المحدد.</div>
        </div>
        <div class="p-4 bg-white rounded-lg shadow animate-fade-up" style="animation-delay:240ms">
          <div class="font-semibold mb-1">استشارات مواد</div>
          <div class="text-sm text-gray-600">اختيار مواد اقتصادية وطويلة الأمد ومتوافقة مع المعايير.</div>
        </div>
      </div>

      <div class="mt-8 text-center">
        <a routerLink="/contact" class="btn btn-primary">اطلب استشارة مجانية</a>
      </div>
    </section>
  `,
  styles: []
})
export class ServicesComponent {}

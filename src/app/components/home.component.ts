import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HeroSectionComponent } from './hero-section.component';
import { PartnersComponent } from './partners.component';
import { FeedbackComponent } from './feedback.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, HeroSectionComponent, PartnersComponent, FeedbackComponent],
  template: `
    <app-hero-section></app-hero-section>
    <section class="home container-max mx-auto py-12">
      <div class="grid md:grid-cols-2 gap-8 items-start">
        <!-- Left: Intro + CTA -->
        <div class="intro animate-fade-up">
          <h2 class="text-3xl font-semibold mb-4">A to Z Innovations</h2>
          <p class="text-gray-600 mb-6">نقدم تصميم معماري مميز، تشطيبات داخلية وخارجية، وإدارة مشاريع متكاملة مع اهتمام بالتفاصيل والجودة.</p>
          <a routerLink="/projects" class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow" aria-label="شاهد أعمالنا">شاهد أعمالنا</a>
        </div>

        <!-- Right: Projects column (one-side professional gallery) -->
        <aside class="projects-panel animate-pop">
          <h3 class="text-4xl font-extrabold text-blue-900 mb-6 tracking-tight animate-pop" style="letter-spacing:-1px;">الأعمال المختارة</h3>
          <div class="space-y-4">
            <a routerLink="/projects" class="block p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-transform hover:scale-102 animate-pop" style="animation-delay:0ms">
              <div class="flex items-center gap-4">
                <img src="assets/demo-1.svg" alt="فيلا راقية" class="w-20 h-14 object-cover rounded-md flex-none"/>
                <div>
                  <div class="font-semibold">فيلا راقية - التجهيز الداخلي</div>
                  <div class="text-sm text-gray-500">مشروع متكامل - مواد فاخرة</div>
                </div>
              </div>
            </a>

            <a routerLink="/projects" class="block p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-transform hover:scale-102 animate-pop" style="animation-delay:90ms">
              <div class="flex items-center gap-4">
                <img src="assets/demo-2.svg" alt="مبنى إداري" class="w-20 h-14 object-cover rounded-md flex-none"/>
                <div>
                  <div class="font-semibold">مبنى إداري - تصميم عصري</div>
                  <div class="text-sm text-gray-500">حلول توفير المساحات والمداخل</div>
                </div>
              </div>
            </a>

            <a routerLink="/projects" class="block p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-transform hover:scale-102 animate-pop" style="animation-delay:180ms">
              <div class="flex items-center gap-4">
                <img src="assets/demo-3.svg" alt="شقة نموذجية" class="w-20 h-14 object-cover rounded-md flex-none"/>
                <div>
                  <div class="font-semibold">شقة نموذجية - تشطيبات</div>
                  <div class="text-sm text-gray-500">تفاصيل تنفيذ دقيقة ومواد متينة</div>
                </div>
              </div>
            </a>
          </div>
        </aside>
      </div>
    </section>

    <!-- Packages Section -->
    <section class="container-max mx-auto py-12" style="position:relative;z-index:50;pointer-events:auto;">
      <h2 class="text-3xl font-extrabold text-blue-900 mb-8 text-center">باقات التشطيب والعروض</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="rounded-2xl shadow-lg bg-white p-8 flex flex-col items-center border-2 border-blue-100 hover:shadow-2xl transition-all animate-fade-up" style="animation-delay:0ms">
          <div class="text-xl font-bold mb-2 text-blue-800">باقة الكلاسيك</div>
          <div class="text-gray-600 mb-4">تشطيب قياسي بجودة عالية وخامات ممتازة</div>
          <div class="text-3xl font-extrabold text-blue-700 mb-2">1200 <span class="text-base font-normal">ج/م²</span></div>
          <div class="text-green-600 font-semibold mb-2">خصم 10% لفترة محدودة</div>
          <button type="button" (click)="book('باقة الكلاسيك')" class="mt-4 px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition" style="pointer-events:auto;">احجز الآن</button>
        </div>
        <div class="rounded-2xl shadow-lg bg-white p-8 flex flex-col items-center border-2 border-blue-200 hover:shadow-2xl transition-all animate-fade-up" style="animation-delay:100ms">
          <div class="text-xl font-bold mb-2 text-blue-800">باقة البريميوم</div>
          <div class="text-gray-600 mb-4">تشطيب فاخر مع تصميمات عصرية وخامات مستوردة</div>
          <div class="text-3xl font-extrabold text-blue-700 mb-2">1800 <span class="text-base font-normal">ج/م²</span></div>
          <div class="text-green-600 font-semibold mb-2">خصم 15% على أول 5 عملاء</div>
          <button type="button" (click)="book('باقة البريميوم')" class="mt-4 px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition" style="pointer-events:auto;">احجز الآن</button>
        </div>
        <div class="rounded-2xl shadow-lg bg-white p-8 flex flex-col items-center border-2 border-blue-300 hover:shadow-2xl transition-all animate-fade-up" style="animation-delay:200ms">
          <div class="text-xl font-bold mb-2 text-blue-800">باقة التوفير</div>
          <div class="text-gray-600 mb-4">تشطيب اقتصادي مع ضمان الجودة وسرعة التنفيذ</div>
          <div class="text-3xl font-extrabold text-blue-700 mb-2">900 <span class="text-base font-normal">ج/م²</span></div>
          <div class="text-green-600 font-semibold mb-2">خصم 5% عند الدفع النقدي</div>
          <button type="button" (click)="book('باقة التوفير')" class="mt-4 px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition" style="pointer-events:auto;">احجز الآن</button>
        </div>
      </div>
    </section>
    <app-partners></app-partners>
    <app-feedback></app-feedback>
  `,
  styles: [
    `
    :host { display:block }
    .projects-panel { background: transparent }
    `
  ]
})
export class HomeComponent {
  constructor(private router: Router) {}

  book(packageName: string) {
    const message = encodeURIComponent(`مرحبًا، أرغب في حجز ${packageName} - أرجو تزويدي بالتفاصيل.`);
    // Ask user whether to open WhatsApp (OK) or go to payment (Cancel)
    const openWhats = confirm('فتح دردشة واتساب للحجز؟ اضغط "موافق" للدردشة أو "إلغاء" للذهاب لبوابة الدفع.');
    if (openWhats) {
      // Placeholder phone number; replace with your company's WhatsApp number
      const phone = '+201000000000';
      const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phone)}&text=${message}`;
      window.open(url, '_blank');
    } else {
      // Navigate to payment page, passing the package as a query param
      this.router.navigate(['/payment'], { queryParams: { package: packageName } });
    }
  }
}

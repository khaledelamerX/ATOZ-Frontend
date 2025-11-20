import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './hero-section.component';
import { PartnersComponent } from './partners.component';
import { FeedbackComponent } from './feedback.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, HeroSectionComponent, PartnersComponent, FeedbackComponent],
  template: `
    <app-hero-section></app-hero-section>

    <!-- الأعمال المختارة Section -->
    <section class="home container-max mx-auto py-12">
      <h3 class="text-4xl font-extrabold text-blue-900 mb-8 text-center tracking-tight">
        الأعمال المختارة
      </h3>

      <!-- Carousel -->
      <div class="relative overflow-hidden">
        <div class="flex transition-transform duration-700"
             [style.transform]="'translateX(-' + currentIndex * 100 + '%)'">
          <ng-container *ngFor="let project of projects">
            <a routerLink="/projects"
               class="relative flex-none w-1/2 sm:w-1/3 md:w-1/4 p-2 group overflow-hidden rounded-lg shadow-lg transform transition hover:scale-105">
              <img [src]="project.image" [alt]="project.title"
                   class="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"/>
              <div
                class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-white text-center p-4">
                <h4 class="font-bold text-lg">{{ project.title }}</h4>
                <p class="text-sm mt-1">{{ project.description }}</p>
              </div>
            </a>
          </ng-container>
        </div>

        <button (click)="prev()"
                class="absolute left-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full shadow hover:bg-blue-700 transition z-10">
          ‹
        </button>
        <button (click)="next()"
                class="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full shadow hover:bg-blue-700 transition z-10">
          ›
        </button>
      </div>
    </section>

    <!-- باقات التشطيب والعروض Section -->
    <section class="container-max mx-auto py-12">
      <h2 class="text-3xl font-extrabold text-blue-900 mb-8 text-center">باقات التشطيب والعروض</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div *ngFor="let pack of packages"
             class="rounded-2xl shadow-lg bg-white p-8 flex flex-col items-center border-2 border-blue-100 hover:shadow-2xl transition-all">
          <div class="text-xl font-bold mb-2 text-blue-800">{{ pack.name }}</div>
          <div class="text-gray-600 mb-4">{{ pack.desc }}</div>
          <div class="text-3xl font-extrabold text-blue-700 mb-2">{{ pack.price }} <span class="text-base font-normal">ج/م²</span></div>
          <div class="text-green-600 font-semibold mb-2">{{ pack.offer }}</div>
          <button type="button" (click)="book(pack.name)"
                  class="mt-4 px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
            احجز الآن
          </button>
        </div>
      </div>
    </section>

    <app-partners></app-partners>
    <app-feedback></app-feedback>
  `,
  styles: [`
    :host { display: block; }
    .home { position: relative; }
  `]
})
export class HomeComponent {
  projects = [
    { image: 'assets/projects/building-1.jpg', title: 'مبنى حديث - تصميم عصري', description: 'تفاصيل دقيقة وتنفيذ ممتاز' },
    { image: 'assets/projects/interior-1.jpg', title: 'تشطيب داخلي فاخر', description: 'تصميم أنيق ومواد عالية الجودة' },
    { image: 'assets/projects/interior-2.jpg', title: 'تصميم داخلي متكامل', description: 'تفاصيل دقيقة ومواد متينة' },
    { image: 'assets/projects/interior-3.jpg', title: 'تفاصيل داخلية دقيقة', description: 'تشطيبات عالية الجودة' },
    { image: 'assets/projects/villa-1.jpg', title: 'فيلا راقية - التجهيز الداخلي', description: 'مشروع متكامل - مواد فاخرة' },
    { image: 'assets/projects/villa-2.jpg', title: 'فيلا فاخرة - تصميم حديث', description: 'خامات عالية الجودة وتنفيذ محترف' }
  ];

  packages = [
    { name: 'باقة الكلاسيك', desc: 'تشطيب قياسي بجودة عالية وخامات ممتازة', price: 1200, offer: 'خصم 10% لفترة محدودة' },
    { name: 'باقة البريميوم', desc: 'تشطيب فاخر مع تصميمات عصرية وخامات مستوردة', price: 1800, offer: 'خصم 15% على أول 5 عملاء' },
    { name: 'باقة التوفير', desc: 'تشطيب اقتصادي مع ضمان الجودة وسرعة التنفيذ', price: 900, offer: 'خصم 5% عند الدفع النقدي' }
  ];

  currentIndex = 0;

  constructor(private router: Router) {
    setInterval(() => this.next(), 4000);
  }

  prev() {
    this.currentIndex = (this.currentIndex === 0) ? this.projects.length - 1 : this.currentIndex - 1;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
  }

  book(packageName: string) {
    const message = encodeURIComponent(`مرحبًا، أرغب في حجز ${packageName} - أرجو تزويدي بالتفاصيل.`);
    const openWhats = confirm('فتح دردشة واتساب للحجز؟ اضغط "موافق" للدردشة أو "إلغاء" للذهاب لبوابة الدفع.');
    if (openWhats) {
      const phone = '+201000000000';
      const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phone)}&text=${message}`;
      window.open(url, '_blank');
    } else {
      this.router.navigate(['/payment'], { queryParams: { package: packageName } });
    }
  }
}

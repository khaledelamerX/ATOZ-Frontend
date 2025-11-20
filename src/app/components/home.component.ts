import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; // <-- add this
import { HeroSectionComponent } from './hero-section.component';
import { PartnersComponent } from './partners.component';
import { FeedbackComponent } from './feedback.component';

@Component({
  selector: 'app-home',
  standalone: true, // make sure this is standalone
  imports: [
    CommonModule,      // <-- add this
    RouterLink,
    HeroSectionComponent,
    PartnersComponent,
    FeedbackComponent
  ],
  template: `
    <app-hero-section></app-hero-section>

    <section class="home container-max mx-auto py-12">
      <h3 class="text-4xl font-extrabold text-blue-900 mb-8 text-center tracking-tight">
        الأعمال المختارة
      </h3>

      <div class="relative overflow-hidden">
        <div class="flex transition-transform duration-700"
             [style.transform]="'translateX(-' + currentIndex * 100 + '%)'">
          <ng-container *ngFor="let project of projects">
            <a routerLink="/projects"
               class="relative flex-none w-1/2 sm:w-1/3 md:w-1/4 p-2 group overflow-hidden rounded-lg shadow-lg transform transition hover:scale-105">
              <img [src]="project.image" [alt]="project.title"
                   class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"/>
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
}

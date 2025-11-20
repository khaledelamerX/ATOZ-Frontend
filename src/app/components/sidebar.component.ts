import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="fixed inset-0 z-40" *ngIf="open" (click)="close()">
      <div class="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      <aside class="absolute left-0 top-0 h-full w-72 bg-white shadow-lg p-6 transform transition-transform duration-300" (click)="$event.stopPropagation()">
        <div class="flex items-center justify-between mb-6">
          <div class="text-lg font-bold">القائمة</div>
          <button (click)="close()" aria-label="إغلاق" class="p-1 rounded hover:bg-slate-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        <nav class="flex flex-col gap-3">
          <a routerLink="/" (click)="close()" class="px-3 py-2 rounded hover:bg-slate-50">الرئيسية</a>
          <a routerLink="/projects" (click)="close()" class="px-3 py-2 rounded hover:bg-slate-50">الأعمال</a>
          <a routerLink="/services" (click)="close()" class="px-3 py-2 rounded hover:bg-slate-50">الخدمات</a>
          <a routerLink="/about" (click)="close()" class="px-3 py-2 rounded hover:bg-slate-50">عن الشركة</a>
          <a routerLink="/news" (click)="close()" class="px-3 py-2 rounded hover:bg-slate-50">الأخبار</a>
          <a routerLink="/contact" (click)="close()" class="px-3 py-2 rounded hover:bg-slate-50">تواصل معنا</a>
        </nav>
      </aside>
    </div>
  `,
  styles: [
    `:host { display:block }`
  ]
})
export class SidebarComponent implements OnDestroy {
  open = false;
  sub: Subscription;
  constructor(private svc: SidebarService) {
    this.sub = this.svc.open$.subscribe(v => this.open = v);
  }
  close() { this.svc.close(); }
  ngOnDestroy() { this.sub.unsubscribe(); }
}

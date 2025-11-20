import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: `
    <header class="bg-white shadow-sm animate-fade-down" dir="rtl" style="position:sticky;top:0;z-index:40">
      <div class="container-max flex items-center justify-between py-4">
        
        <!-- Logo and Hamburger -->
        <div class="flex items-center gap-4">
          <button (click)="toggleMobileMenu()" aria-label="قائمة" class="p-2 rounded-md hover:bg-slate-100 md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <a class="flex items-center gap-2 group/logo transition-transform duration-200" routerLink="/" aria-label="ATOZ home">
            <img src="assets/WhatsApp Image 2025-11-20 at 5.18.51 PM.jpeg" alt="ATOZ logo" style="height:48px;width:auto;object-fit:contain;" class="transition-transform duration-200 group-hover/logo:scale-110 group-hover/logo:shadow-lg" />
            <span class="text-2xl font-bold text-slate-900">A to Z Innovations</span>
          </a>
        </div>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center gap-2">
          <a routerLink="/about" class="px-3 py-2 rounded-md text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200 hover:scale-105">عن الشركة</a>
          <a routerLink="/services" class="px-3 py-2 rounded-md text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200 hover:scale-105">الخدمات</a>
          <a routerLink="/projects" class="px-3 py-2 rounded-md text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200 hover:scale-105">الأعمال</a>
          <a routerLink="/news" class="px-3 py-2 rounded-md text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200 hover:scale-105">الأخبار</a>
          <a routerLink="/contact" class="px-3 py-2 rounded-md text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200 hover:scale-105">تواصل معنا</a>
          <a routerLink="/signin" class="px-3 py-2 rounded-md text-slate-700 hover:text-blue-700 transition">دخول</a>
          <a routerLink="/signup" class="px-3 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition">تسجيل</a>
          <button (click)="toggleTheme()" class="px-2 py-1 rounded-md text-slate-700 hover:bg-blue-50 transition-all duration-200 hover:scale-110" aria-label="تبديل الوضع">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
              <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
            </svg>
          </button>
        </nav>
      </div>

      <!-- Mobile Menu -->
      <div *ngIf="isMobileMenuOpen" class="md:hidden flex flex-col gap-2 bg-white shadow p-4 absolute top-full right-0 w-64 z-50">
        <a routerLink="/about" class="py-2 px-3 rounded hover:bg-blue-50">عن الشركة</a>
        <a routerLink="/services" class="py-2 px-3 rounded hover:bg-blue-50">الخدمات</a>
        <a routerLink="/projects" class="py-2 px-3 rounded hover:bg-blue-50">الأعمال</a>
        <a routerLink="/news" class="py-2 px-3 rounded hover:bg-blue-50">الأخبار</a>
        <a routerLink="/contact" class="py-2 px-3 rounded hover:bg-blue-50">تواصل معنا</a>
        <a routerLink="/signin" class="py-2 px-3 rounded hover:bg-blue-50">دخول</a>
        <a routerLink="/signup" class="py-2 px-3 rounded bg-blue-600 text-white hover:bg-blue-700">تسجيل</a>
      </div>
    </header>
  `,
  styles: [
    `@keyframes fadeDown { from { opacity: 0; transform: translateY(-24px);} to { opacity: 1; transform: none;} }`,
    `.animate-fade-down { animation: fadeDown 0.7s cubic-bezier(.2,.9,.2,1) both; }`
  ]
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  constructor(private sidebar: SidebarService) {}

  toggleTheme(){
    const el = document.documentElement as HTMLElement;
    const current = el.getAttribute('data-theme');
    if(current === 'dark'){
      el.removeAttribute('data-theme');
      localStorage.removeItem('atoz-theme');
    } else {
      el.setAttribute('data-theme','dark');
      localStorage.setItem('atoz-theme','dark');
    }
  }

  toggleMobileMenu() { this.isMobileMenuOpen = !this.isMobileMenuOpen; }

  toggleSidebar(){ this.sidebar.toggle(); }
}

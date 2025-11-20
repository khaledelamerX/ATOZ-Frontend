import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer class="bg-slate-50 border-t" dir="rtl">
      <div class="container-max py-8 text-sm text-slate-600">
        <div class="grid md:grid-cols-2 gap-6 items-start">
          <div>
            <div class="font-bold text-slate-900 mb-2">A to Z Innovations</div>
            <div class="text-sm">عنوان المكتب: شارع المثال، القاهرة، مصر</div>
            <div class="text-sm">
              الهاتف: <a href="tel:+201028178987" class="text-slate-700 hover:text-slate-900">+20 01028178987</a>
            </div>
            <div class="mt-3 text-sm">
              بريد إلكتروني: <a href="mailto:info@atoz.com" class="text-slate-700 hover:text-slate-900">info@atoz.com</a>
            </div>
          </div>
          <div class="text-sm">
            <div class="font-semibold mb-2">روابط سريعة</div>
            <nav class="flex flex-col gap-2">
              <a routerLink="/services" class="text-slate-600 hover:text-slate-900">الخدمات</a>
              <a routerLink="/projects" class="text-slate-600 hover:text-slate-900">الأعمال</a>
              <a routerLink="/contact" class="text-slate-600 hover:text-slate-900">تواصل معنا</a>
            </nav>
            <div class="mt-4">
              <div class="font-semibold mb-2">تابعنا</div>
              <div class="flex gap-3">
                <a href="https://www.facebook.com/share/1AEmV2oNfg/" target="_blank" aria-label="Facebook" class="text-slate-600 hover:text-slate-900">Facebook</a>
                <a href="https://www.instagram.com/atoz.designs.eg?igsh=MTZlZnp4dnloM2w3aw==" target="_blank" aria-label="Instagram" class="text-slate-600 hover:text-slate-900">Instagram</a>
                <a href="#" aria-label="LinkedIn" class="text-slate-600 hover:text-slate-900">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 text-center text-slate-500">© ATOZ 2025 — جميع الحقوق محفوظة</div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {}

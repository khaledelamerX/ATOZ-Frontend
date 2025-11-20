import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer class="bg-slate-50 border-t" dir="rtl">
      <div class="container-max py-8 text-sm text-slate-600">
        <div class="grid gap-6 md:grid-cols-2 items-start">
          
          <!-- Contact Info -->
          <div class="flex flex-col gap-2">
            <div class="font-bold text-slate-900 text-lg mb-2">A to Z Innovations</div>
            <div>عنوان المكتب: شارع المثال، القاهرة، مصر</div>
            <div>
              الهاتف: 
              <a href="tel:+201028178987" class="text-slate-700 hover:text-slate-900">+20 01028178987</a>
            </div>
            <div>
              بريد إلكتروني: 
              <a href="mailto:info@atoz.com" class="text-slate-700 hover:text-slate-900">info@atoz.com</a>
            </div>
          </div>

          <!-- Quick Links & Social -->
          <div class="flex flex-col gap-4">
            <div>
              <div class="font-semibold mb-2">روابط سريعة</div>
              <nav class="flex flex-col gap-2">
                <a routerLink="/services" class="text-slate-600 hover:text-slate-900">الخدمات</a>
                <a routerLink="/projects" class="text-slate-600 hover:text-slate-900">الأعمال</a>
                <a routerLink="/contact" class="text-slate-600 hover:text-slate-900">تواصل معنا</a>
              </nav>
            </div>

            <div>
              <div class="font-semibold mb-2">تابعنا</div>
              <div class="flex gap-3">
                <a href="https://www.facebook.com/share/1AEmV2oNfg/" target="_blank" aria-label="Facebook" class="text-slate-600 hover:text-slate-900">Facebook</a>
                <a href="https://www.instagram.com/atoz.designs.eg?igsh=MTZlZnp4dnloM2w3aw==" target="_blank" aria-label="Instagram" class="text-slate-600 hover:text-slate-900">Instagram</a>
                <a href="#" aria-label="LinkedIn" class="text-slate-600 hover:text-slate-900">LinkedIn</a>
              </div>
            </div>
          </div>

        </div>

        <!-- Footer Bottom -->
        <div class="mt-6 text-center text-slate-500 text-xs sm:text-sm">© ATOZ 2025 — جميع الحقوق محفوظة</div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {}

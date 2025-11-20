import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../services/mock-data.service';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-12">
      <div class="container-max mx-auto text-center">
        <h3 class="text-2xl font-bold mb-6">إحصائيات سريعة</h3>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div class="bg-white p-6 rounded-xl shadow flex flex-col items-center">
            <div class="p-3 rounded-full bg-blue-50 mb-3">
              <!-- new clients icon -->
              <svg class="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <div class="text-3xl font-extrabold text-blue-700">{{ newClients }}</div>
            <div class="text-sm text-gray-500 mt-2">عملاء جدد</div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow flex flex-col items-center">
            <div class="p-3 rounded-full bg-orange-50 mb-3">
              <!-- properties icon -->
              <svg class="w-8 h-8 text-orange-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 11.5L12 4l9 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 22V12h6v10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <div class="text-3xl font-extrabold text-orange-700">{{ underConstruction }}</div>
            <div class="text-sm text-gray-500 mt-2">عقارات تحت الإنشاء</div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow flex flex-col items-center">
            <div class="p-3 rounded-full bg-green-50 mb-3">
              <!-- current clients icon -->
              <svg class="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <div class="text-3xl font-extrabold text-green-700">{{ currentClients }}</div>
            <div class="text-sm text-gray-500 mt-2">عملاء حاليون</div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow flex flex-col items-center">
            <div class="p-3 rounded-full bg-purple-50 mb-3">
              <!-- new projects icon -->
              <svg class="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 7h18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 12h18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 17h18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <div class="text-3xl font-extrabold text-purple-700">{{ animatedProjects }}</div>
            <div class="text-sm text-gray-500 mt-2">مشاريع جديدة</div>
          </div>
        </div>

        <div class="grid grid-cols-3 md:grid-cols-6 gap-4 items-center justify-center mt-6">
          <img *ngFor="let p of partners" [src]="p" class="mx-auto max-h-20 object-contain" />
        </div>
      </div>
    </section>
  `
})
export class PartnersComponent {
  partners: string[] = [];
  newClients = 0;
  underConstruction = 0;
  currentClients = 0;
  projects = 0;
  animatedProjects = 0;
  interval: any;
  constructor(private mock: MockDataService) {
    this.partners = this.mock.getPartners();
    this.newClients = this.mock.getNewClientsCount();
    this.underConstruction = this.mock.getUnderConstructionPropertiesCount();
    this.currentClients = this.mock.getCurrentClientsCount();
    this.projects = this.mock.getNewProjectsCount();
    // animate projects counter (increment to target)
    this.animatedProjects = 0;
    const step = Math.max(1, Math.floor(this.projects / 20));
    this.interval = setInterval(() => {
      if (this.animatedProjects < this.projects) {
        this.animatedProjects += step;
        if (this.animatedProjects > this.projects) this.animatedProjects = this.projects;
      } else {
        clearInterval(this.interval);
      }
    }, 40);
  }
}

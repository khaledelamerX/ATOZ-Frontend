import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../services/mock-data.service';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-12 bg-slate-50">
      <div class="container-max mx-auto max-w-4xl">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-2xl font-bold">تقييمات العملاء</h3>
          <div class="flex items-center gap-4">
            <div class="text-3xl font-extrabold">{{ average | number:'1.1-1' }}</div>
            <div class="text-sm text-gray-500">متوسط التقييم من {{ feedbacks.length }} تقييم</div>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-4">
          <article *ngFor="let f of feedbacks" class="bg-white p-4 rounded-lg shadow">
            <div class="flex items-start gap-3">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-semibold text-blue-700">{{ f.name[0] }}</div>
              </div>
              <div>
                <div class="flex items-center gap-3">
                  <div class="font-semibold">{{ f.name }}</div>
                  <div class="text-sm text-gray-400">{{ f.date }}</div>
                </div>
                <div class="mt-2 text-sm text-gray-700">{{ f.message }}</div>
                <div class="mt-3 flex items-center gap-1">
                  <ng-container *ngFor="let s of [1,2,3,4,5]">
                    <svg *ngIf="s <= f.rating" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.788 1.402 8.17L12 18.897l-7.336 3.87 1.402-8.17L.132 9.21l8.2-1.192z"/></svg>
                    <svg *ngIf="s > f.rating" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-300" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.788 1.402 8.17L12 18.897l-7.336 3.87 1.402-8.17L.132 9.21l8.2-1.192z"/></svg>
                  </ng-container>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  `
})
export class FeedbackComponent implements OnInit {
  feedbacks: Array<{ name: string; message: string; rating: number; date?: string }> = [];
  average = 5;
  constructor(private mock: MockDataService) {}
  ngOnInit() {
    this.feedbacks = this.mock.getFeedbacks();
    if (this.feedbacks.length) {
      this.average = this.feedbacks.reduce((s, f) => s + f.rating, 0) / this.feedbacks.length;
    }
  }
}

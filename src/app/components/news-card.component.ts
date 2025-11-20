import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-news-card',
  imports: [RouterLink],
  template: `
    <article class="bg-white rounded-lg shadow overflow-hidden">
      <img [src]="img" [alt]="title" class="w-full h-40 object-cover"/>
      <div class="p-4">
        <div class="font-semibold mb-1">{{title}}</div>
        <div class="text-sm text-gray-600 mb-3">{{summary}}</div>
        <a [routerLink]="link" class="text-blue-600 hover:underline">اقرأ المزيد</a>
      </div>
    </article>
  `,
  styles: []
})
export class NewsCardComponent {
  @Input() title = '';
  @Input() summary = '';
  @Input() img = 'assets/demo-2.svg';
  @Input() link = '/news';
}

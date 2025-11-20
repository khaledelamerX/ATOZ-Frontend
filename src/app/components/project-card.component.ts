import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink],
  template: `
    <a class="block bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-transform hover:scale-102" [routerLink]="link">
      <div class="relative h-40 overflow-hidden">
        <img [src]="img" [alt]="title" class="w-full h-40 object-cover"/>
        <div class="card-caption">
          <div class="font-semibold">{{title}}</div>
          <div class="text-sm">{{subtitle}}</div>
        </div>
      </div>
      <div class="p-4">
        <div class="text-sm text-gray-500">{{description}}</div>
      </div>
    </a>
  `,
  styles: []
})
export class ProjectCardComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() img = 'assets/demo-1.svg';
  @Input() description = '';
  @Input() link = '/projects';
}

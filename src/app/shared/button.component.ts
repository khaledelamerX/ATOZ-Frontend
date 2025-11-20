import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <ng-container *ngIf="link; else buttonOnly">
      <a [routerLink]="link" [class]="classes"><ng-content></ng-content></a>
    </ng-container>
    <ng-template #buttonOnly>
      <button [class]="classes"><ng-content></ng-content></button>
    </ng-template>
  `,
  styles: [``]
})
export class ButtonComponent{
  @Input() variant: 'primary'|'secondary' = 'primary';
  @Input() link?: string;

  get classes(){
    return this.variant === 'primary' ? 'btn-primary btn' : 'btn-secondary btn';
  }
}

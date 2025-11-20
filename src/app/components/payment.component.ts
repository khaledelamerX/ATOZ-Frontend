import { Component, inject } from '@angular/core';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-payment',
  template: `
    <section class="py-12 container-max mx-auto">
      <h2 class="text-2xl font-semibold mb-4">بوابة الدفع</h2>
      <p class="text-gray-600 mb-6">صفحة لربط بوابات الدفع. هذه محاكاة للتجربة — سيتم توجيهك لبدء الدفع.</p>
      <div class="space-x-3">
        <button (click)="pay()" class="bg-green-600 text-white px-4 py-2 rounded-md">ادفع الآن (محاكاة)</button>
        <button (click)="pay()" class="bg-gray-200 px-4 py-2 rounded-md">محاكاة PayPal</button>
      </div>
    </section>
  `,
  styles: []
})
export class PaymentComponent {
  private readonly payment = inject(PaymentService);

  pay() {
    this.payment.startPayment({ amount: 1000, currency: 'EGP' });
  }
}

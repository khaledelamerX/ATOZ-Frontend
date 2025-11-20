import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PaymentService {
  startPayment(opts: { amount: number; currency: string }) {
    // Placeholder: integrate real payment SDK (Stripe/PayPal) here.
    console.log('Starting payment', opts);
    alert(`محاكاة: سيتم شحن ${opts.amount} ${opts.currency}`);
    return Promise.resolve({ success: true });
  }
}

import { Component, OnInit, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Payment } from './../models/payment.model'
import * as PaymentActions from './../actions/payment.actions';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.paymentForm = this.fb.group({
      card_number: ['', Validators.required],
      card_holder: '',
      exp_date: '',
      security_code: null,
      amount: 0,
    })
  }

  onSubmit(): void {
    const value: Payment = this.paymentForm.getRawValue();
    this.addPayment(value);
  }

  addPayment(value: Payment) {
    const {card_number, card_holder, exp_date, security_code, amount} = value;
    this.store.dispatch(new PaymentActions.AddPayment({
      card_number: card_number,
      card_holder: card_holder,
      exp_date: exp_date,
      security_code: security_code,
      amount: amount
    }))
  }

}

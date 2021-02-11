import { Component, OnInit, ViewChild, ElementRef, } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Payment } from './../models/payment.model'
import * as PaymentActions from './../actions/payment.actions';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AmountValidator, cardExpiryValidator } from '../shared/card.validator';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentForm: FormGroup;
  successfull: boolean;
  @ViewChild("svgNumber", { read: ElementRef }) svgNumber: ElementRef;
  @ViewChild("creditCard", { read: ElementRef }) creditCard: ElementRef;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.successfull = false;
   }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.paymentForm = this.fb.group({
      card_number: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      card_holder: ['', [Validators.required]],
      exp_date: ['', [Validators.required, cardExpiryValidator]],
      security_code: ['', [Validators.min(0), Validators.max(999)]],
      amount: [0, [Validators.required, AmountValidator]],
    })
  }

  onSubmit(): void {
    const value: Payment = this.paymentForm.getRawValue();
    this.addPayment(value);
    this.paymentForm.reset();
    this.successfull=true
    setTimeout(() => this.successfull=false, 4000);
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

  // Card Events
  onCardFlip(e) {
    const creditCard = this.creditCard.nativeElement;
    creditCard.classList.contains('flipped') ? creditCard.classList.remove('flipped') : creditCard.classList.add('flipped');
  }

  displayVal(e) {
    const svgNumber = this.svgNumber.nativeElement;
    if(e.target.value === '' ) {
      svgNumber.textContent = '0123 4567 8910 1112'
    }else if(e.target.value.length < 20){
      svgNumber.textContent = e.target.value;
    }
  }

}

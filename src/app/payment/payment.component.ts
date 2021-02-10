import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Payment } from './../models/payment.model'
import * as PaymentActions from './../actions/payment.actions';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  addPayment(card_number, card_holder, exp_date, security_code, amount){
    console.log(card_number, card_holder, exp_date, security_code, amount)
    this.store.dispatch(new PaymentActions.AddPayment({
      card_number: card_number,
      card_holder: card_holder,
      exp_date: exp_date,
      security_code: security_code,
      amount: amount
    }))
  }

  ngOnInit(): void {
  }

}

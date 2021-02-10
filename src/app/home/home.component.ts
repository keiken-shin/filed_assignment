import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Payment } from './../models/payment.model';
import { AppState } from './../app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  payments: Observable<Payment[]>;

  constructor(private store: Store<AppState>) { 
    this.payments = store.select('payment')
  }

  ngOnInit(): void {
  }

}

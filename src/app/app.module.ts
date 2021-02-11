import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component'
import { AppRoutingModule } from "./app-routing.module";

import { StoreModule } from '@ngrx/store';
import { paymentReducer } from './reducers/payment.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      payment: paymentReducer,
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

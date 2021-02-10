import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Payment } from './../models/payment.model';

export const ADD_PAYMENT = '[PAYMENT] ADD';

export class AddPayment implements Action {
    readonly type = ADD_PAYMENT

    constructor(public payload: Payment) {}
}

export type Actions = AddPayment;
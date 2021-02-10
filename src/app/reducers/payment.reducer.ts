import { Action } from '@ngrx/store';
import { Payment } from './../models/payment.model';
import * as PaymentActions from './../actions/payment.actions';

// const initialState: Payment = {
//     card_number: '',
//     card_holder: '',
//     exp_date: new Date(),
//     security_code: 0,
//     amount: 0,
// }

export function paymentReducer(state: Payment[] = [], action: PaymentActions.Actions){
    console.log(action);
    console.log(state);
    switch(action.type){
        case PaymentActions.ADD_PAYMENT:
            return [...state, action.payload];
        default:
            return state;
    }
}
import { Payment } from './../models/payment.model';
import * as PaymentActions from './../actions/payment.actions';

export function paymentReducer(state: Payment[] = [], action: PaymentActions.Actions){
    switch(action.type){
        case PaymentActions.ADD_PAYMENT:
            return [...state, action.payload];
        default:
            return state;
    }
}
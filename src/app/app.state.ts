import { Payment } from './models/payment.model';

export interface AppState {
    readonly payment: Payment[];
}
export interface Payment {
    card_number: string,
    card_holder: string,
    exp_date: Date,
    security_code: number,
    amount: number,
}
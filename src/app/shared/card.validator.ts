import { AbstractControl } from "@angular/forms";

export function cardExpiryValidator(control: AbstractControl): {[key: string]: any} | null {
    const currentDate = new Date();
    const expiryDate = new Date(control.value);
    const correctExpiry = expiryDate >= currentDate ? null : {'expired': 'Card has been expired'};
    return correctExpiry;
}

export function AmountValidator(control: AbstractControl): {[key: string]: any} | null {
    const correctAmount = control.value > 0 ? null : {'amount': 'Please enter valid amount'};
    return correctAmount;
}
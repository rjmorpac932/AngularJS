import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";

export class CustomValidators extends Validators{
    static dateMatch(control: AbstractControl): ValidationErrors | null {
        const datePatron =/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
        return datePatron.test(control.value) ? null : {'dateMismatch' : true};
    }
}
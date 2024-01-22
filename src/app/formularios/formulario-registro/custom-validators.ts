import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";
import { group } from "console";

export class CustomValidators extends Validators{

    static emailMatch(control: AbstractControl): ValidationErrors | null {
        const emailPatron =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPatron.test(control.value) ? null : {'emailMismatch' : true};
    }

    static passwordMatch(contrasenia: string, confirmarContrasenia: string) {
        return (group: AbstractControl): ValidationErrors | null => {
            const contraseniaControl = group.get(contrasenia);
            const confirmarContraseniaControl = group.get(confirmarContrasenia);
            return contraseniaControl?.value === confirmarContraseniaControl?.value? null : {'passwordMismatch' : true};
        }
    }
}
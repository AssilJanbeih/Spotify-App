import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";
import * as moment from "moment";

export class CustomValidators {
    //whitespace validation
    static noOnlyWhiteSpace(control: FormControl): ValidationErrors {

        //Check if only have white space
        if ((control.value != null) && (control.value.trim().length === 0)) {
            return { 'notOnlyWhitespace': true };
        }
        else {
            return { 'notOnlyWhitespace': false };
        }
    }

    //Check Age
    static age25Validator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            let age = moment().diff(control.value, 'years');
            if (age > 25) {
                return { 'ageBelow25': true };
            }
            else {
                return null
            }
        };
    }
}

import { AbstractControl } from "@angular/forms";


export function forbiddenNameValidator(forbiddenName: RegExp) {
    return (control: AbstractControl): {[key: string]: any} | null => {
        const forbidden = forbiddenName.test(control.value)
        console.log(control.get('password'))
        return forbidden ? { "forbidden": {value:control.value}} : null
    }
}
 

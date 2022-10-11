import { AbstractControl } from "@angular/forms";

export function passwordValidator(control:AbstractControl):{[key:string]:boolean}|null{
    console.log(control)
    let pass=control.get('password')
    let confPass=control.get('confirmPassword')
    if(pass?.pristine || confPass?.pristine){
        return null;
    }
    return pass && confPass && pass.value !== confPass.value ? {"misMatch":true} :null
     
}
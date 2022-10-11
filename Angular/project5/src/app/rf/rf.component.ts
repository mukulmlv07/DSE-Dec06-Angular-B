import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from './shared/passwordValidator'
@Component({
  selector: 'app-rf',
  templateUrl: './rf.component.html',
  styleUrls: ['./rf.component.css']
})
export class RfComponent implements OnInit {
  // registrationForm = new FormGroup({
  //   userName: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode:new FormControl('')
  //   })
  // })
  get userName() {
    return this.registrationForm.get('userName')
  }
  get password() {
    return this.registrationForm.get('password')
  }
  get confirmPassword() {
    return this.registrationForm.get('confirmPassword')
  }
  get email() {
    return this.registrationForm.get('email')
  }
  get alternateEmails(){
    return this.registrationForm.get('alternateEmails') as FormArray
  }
 

  registrationForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3)]],
    password: [''],
    email:[''],
    subscribe:[false,],
    confirmPassword: [''],
    address: this.fb.group({
      city: [],
      state: [],
      postalCode: []
    }),
    alternateEmails: this.fb.array([]  )
  }, { validator: passwordValidator })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm.get('subscribe')?.valueChanges.subscribe(checkedValue=>{
      let email=this.registrationForm.get('email')
      if(checkedValue){
        email?.setValidators(Validators.required)
      }else{
        email?.clearValidators()
      }
    })
  }
  addAlternateEmail(){
    console.log(this.alternateEmails)
    this.alternateEmails.push(this.fb.control(''))
  }

}

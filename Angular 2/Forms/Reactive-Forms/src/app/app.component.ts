import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { EnrollmentService } from './enrollment.service';
import { PasswordValidator } from './shared/password.validator';
import { forbiddenNameValidator } from './shared/user-name.validator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private fb: FormBuilder,private enroll:EnrollmentService) { }
  // registrationForm = new FormGroup({
  //   userName: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     pin: new FormControl('')
  //   })
  // })
  registrationForm: FormGroup

  get userName() {
    return this.registrationForm.get('userName');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get alternatEmails() {
    return this.registrationForm.get('alternatEmails') as FormArray
  }
  addAlternateEmail() {
    this.alternatEmails.push(this.fb.control('')) 
  }
  ngOnInit() {
    this.registrationForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)]],
      password: [''],
      email: [''],
      subscribe:[false],
      confirmPassword: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
        pin: ['']
      }),
      alternatEmails: this.fb.array([])
    }, {validator:PasswordValidator});
  
    this.registrationForm.get('subscribe').valueChanges.subscribe(
      checkedValue => {
        const email = this.registrationForm.get('email');
        console.log(checkedValue)
        if (checkedValue) {
          email.setValidators(Validators.required);
        }
        else {
          email.clearValidators();
        }
        email.updateValueAndValidity();
      }
    )
  }
 
  loadData() {
    this.registrationForm.patchValue({
      userName: "Mukul",
      password: 123456,
      confirmPassword: 123456,
      address: {
        city: "Indore",
        state: "MP",
      }
    });
  }
  onSubmit() {
    this.enroll.sent(this.registrationForm.value).subscribe(data => console.log("success", data), error => { console.log("Failed",error.message)})
  }
}

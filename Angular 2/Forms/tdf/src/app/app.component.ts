import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title1 = 'tdf';
  topics = ['Vue', 'React', 'Angular'];
  userModel = new User('Mukul', 'mukulmlv07gmail.com', 8085183783, 'default', 'morning', true);
  hasError = true;
  isSubmited = false;
  errorMsg = '';
  validateTopic(v: any) {
    if (v === "default") {
      this.hasError = true;
    }
    else {
      this.hasError = false;
    }
  } 
  constructor(private enrollmentService: EnrollmentService) { }
  onSubmit() {
    console.log(this.userModel);
    this.enrollmentService.enroll(this.userModel).subscribe(data => { this.isSubmited = true; console.log("Success", data); }, error => { this.errorMsg = error.message; console.log("error",error)});
  }
}

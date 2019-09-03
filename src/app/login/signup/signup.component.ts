import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  signupForm;
  constructor(private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group ({
      firstName: '',
      lastName: '',
      handle: '',
      email: '',
      password: ''
    });
   }

   onSubmit(signupForm) {
     console.log(signupForm);
   }

  ngOnInit() {
  }

}

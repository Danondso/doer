import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../core/services/login/login.service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm;
  constructor(private formBuilder: FormBuilder, private loginService: LoginService) {

    this.loginForm = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  ngOnInit() {

  }

  onSubmit(loginForm) {
    console.log(loginForm);
    //TODO sanitize inputs.
    this.loginService.login(loginForm).subscribe(result => {
      console.log(result);
    });
  }

}

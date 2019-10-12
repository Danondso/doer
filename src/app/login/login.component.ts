import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../core/services/login/login.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm;
  appTitle = 'DOER';
  showInvalidLogin;
  signUpToggle = environment.signUpToggle;
  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {

    this.loginForm = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  onSubmit(loginForm) {
    this.showInvalidLogin = false;
    this.loginService.login(loginForm.email, loginForm.password).then(result => {
      if (result) {
        this.router.navigate(['/tasks']);
      }
    }).catch(err => {
        this.showInvalidLogin = true;
    });
  }

}

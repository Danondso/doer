import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../core/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm;
  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {

    this.loginForm = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  ngOnInit() {

  }

  onSubmit(loginForm) {
    // TODO sanitize inputs.
    this.loginService.login(loginForm.email, loginForm.password).then(result => {
      console.log(result);
      if (result) {
        this.router.navigate(['/tasks']);
      }
    }).catch(err => {
      // TODO setup a toast message or something saying an error occurred.
    });
  }

}

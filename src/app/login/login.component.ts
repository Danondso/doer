import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../core/services/login/login.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

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
    //TODO sanitize inputs.
    this.loginService.login(loginForm)(result => {
      this.router.navigate(['/tasks']);
    });
  }

}

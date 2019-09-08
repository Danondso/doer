import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl: string = environment.apiBaseUrl;

  constructor(private oauthService: OAuthService) { }

  login() {
    this.oauthService.initCodeFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  signup(signupBody) {
  }
}

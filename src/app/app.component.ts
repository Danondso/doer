import { Component, OnInit } from '@angular/core';
import { ThemeService } from './core/services/theme/theme.service';
import { Observable } from 'rxjs';
import { OAuthService, JwksValidationHandler, AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '../environments/environment';
import { LoginService } from './core/services/login/login.service';

const authCodeConfig: AuthConfig = {
  issuer: environment.issuer,
  redirectUri: environment.redirectUri,
  clientId: environment.clientId,
  responseType: environment.responseType,
  showDebugInformation: environment.showDebugInformation,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'doer';
  isDarkTheme: Observable<boolean>;
  isLoggedIn: boolean;

  constructor(private themeService: ThemeService, private oauthService: OAuthService, private loginService: LoginService) {
    this.oauthService.configure(authCodeConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  ngOnInit(): void {
    this.isDarkTheme = this.themeService.isDarkTheme;
    this.isLoggedIn = this.oauthService.hasValidAccessToken();
  }

  toggleDarkTheme(isToggled: boolean) {
    this.themeService.setDarkTheme(isToggled);
  }

  logoutUser() {
    this.loginService.logout();
  }
}

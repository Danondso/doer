import { Component, OnInit } from '@angular/core';
import { ThemeService } from './core/services/theme/theme.service';
import { Observable } from 'rxjs';
import { OAuthService, JwksValidationHandler, AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '../environments/environment';

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

  constructor(private themeService: ThemeService, private oauthService: OAuthService) {
    this.oauthService.configure(authCodeConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  ngOnInit(): void {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  toggleDarkTheme(isToggled: boolean) {
    this.themeService.setDarkTheme(isToggled);
  }

}

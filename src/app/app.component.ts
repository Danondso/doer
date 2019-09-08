import { Component, OnInit } from '@angular/core';
import { ThemeService } from './core/services/theme/theme.service';
import { Observable } from 'rxjs';
import { OAuthService, JwksValidationHandler, AuthConfig } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'doer';
  isDarkTheme: Observable<boolean>;

  constructor(private themeService: ThemeService, private oauthService: OAuthService) {

    const authConfig: AuthConfig = {    };

    this.oauthService.configure(authConfig);
    this.oauthService.redirectUri = window.location.origin;
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

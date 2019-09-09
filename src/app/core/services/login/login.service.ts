import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OAuthService } from 'angular-oauth2-oidc';
import * as OktaAuth from '@okta/okta-auth-js';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl: string = environment.apiBaseUrl;
  private authClient: any; // todo fix this to not be any?

  constructor(private oauthService: OAuthService) {
    this.authClient = new OktaAuth({
      url: environment.idpBaseUrl,
      issuer: 'default'
    });
  }

  login(username: string, password: string): Promise<boolean> {
    return this.oauthService.createAndSaveNonce().then(nonce => {
      return this.authClient
        .signIn({
          username,
          password
        })
        .then(response => {
          if (response.status === 'SUCCESS') {
            return this.authClient.token
              .getWithoutPrompt({
                clientId: this.oauthService.clientId,
                responseType: ['id_token', 'token'],
                sessionToken: response.sessionToken,
                nonce,
                redirectUri: 'http://localhost:4200/tasks'
              })
              .then(tokens => {
                const idToken = tokens[0].idToken;
                const accessToken = tokens[1].accessToken;
                const keyValuePair = `#id_token=${encodeURIComponent(
                  idToken
                )}&access_token=${encodeURIComponent(accessToken)}`;
                // tryLogin isn't working, need to understand why
                return this.oauthService.tryLoginImplicitFlow({
                  customHashFragment: keyValuePair,
                  disableOAuth2StateCheck: true
                });
              });
          } else {
            return Promise.reject('We cannot handle the ' + response.status + ' status');
          }
        });
    });
    // this.oauthService.initCodeFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  signup(signupBody) {}
}

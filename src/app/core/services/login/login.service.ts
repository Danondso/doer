import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OAuthService } from 'angular-oauth2-oidc';
import * as OktaAuth from '@okta/okta-auth-js';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl: string = environment.apiBaseUrl;
  private authClient: any;

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
                scopes: environment.scopes,
                redirectUri: environment.tokenRedirectUri
              })
              .then(tokens => {
                const idToken = tokens[0].idToken;
                const accessToken = tokens[1].accessToken;
                const keyValuePair = `#id_token=${encodeURIComponent(
                  idToken
                )}&access_token=${encodeURIComponent(accessToken)}`;
                return this.oauthService.tryLoginImplicitFlow({
                  customHashFragment: keyValuePair,
                  disableOAuth2StateCheck: true
                });
              }).catch(error => {
                console.log('Error occurred while logging in', error);
              });
          } else {
            return Promise.reject('Unable to handle ' + response.status + ' status');
          }
        });
    });
  }

  logout() {
    this.oauthService.logOut();
  }

  signup(signupBody) {}
}

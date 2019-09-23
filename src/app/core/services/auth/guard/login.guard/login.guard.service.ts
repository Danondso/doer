import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.oauthService.hasValidIdToken()) {
      console.log('The id token is invalid after login.');
      return false;
    }
    return true;
  }

  constructor(private oauthService: OAuthService) { }
}

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OauthInterceptorService implements HttpInterceptor {

  constructor(private oauthService: OAuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.oauthService.getAccessToken();
    let changedRequest = request;
    const headerSettings: {[name: string]: string | string[]; } = {};

    for (const key of request.headers.keys()) {
      headerSettings[key] = request.headers.getAll(key);
    }
    if (accessToken) {
      headerSettings['Authorization'] = 'Bearer ' + accessToken;
    }
    headerSettings['Content-Type'] = 'application/json';
    const newHeaders = new HttpHeaders(headerSettings);

    changedRequest = request.clone({
      headers: newHeaders});
    return next.handle(changedRequest);
  }
}

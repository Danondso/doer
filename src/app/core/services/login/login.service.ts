import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl: string = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) { }

  login(loginBody) {
    const headers = new HttpHeaders().append('Authorization', 'Basic ' + btoa(loginBody.email + ':' + loginBody.password));
    return this.httpClient.post(`${this.apiUrl}/login`, '', {headers});
  }

  signup(signupBody) {
    this.httpClient.post(`${this.apiUrl}/signup`, signupBody);
  }
}

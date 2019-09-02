import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl: string = environment.apiBaseUrl;

  headers = new HttpHeaders()
  .append('Access-Control-Allow-Origin', 'localhost')
  .append('Access-Control-Allow-Methods', 'POST, PUT, DELETE');

  constructor(private httpClient: HttpClient) { }

  login(loginBody) {
    const token = this.basicAuthWrapper(loginBody.email, loginBody.password);
    this.headers.append('Authorization', 'Basic ' + token);
    return this.httpClient.post(`${this.apiUrl}/login`, '', {headers: this.headers});
  }

  basicAuthWrapper(user: string, password: string) {
    return btoa(user + ':' + password);
  }

  signup(signupBody) {
    this.httpClient.post(`${this.apiUrl}/signup`, signupBody, {headers: this.headers});
  }
}

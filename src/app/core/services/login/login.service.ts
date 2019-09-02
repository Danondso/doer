import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl: string = environment.apiBaseUrl;

  headers = new HttpHeaders();

  constructor(private httpClient: HttpClient) { }

  login(loginBody) {
    this.headers.append('Authorization', 'Basic ' + btoa(loginBody.email + ':' + loginBody.password));
    this.headers.append('Access-Control-Allow-Origin', 'localhost');
    this.headers.append('Access-Control-Allow-Methods', 'POST, PUT, DELETE');
    return this.httpClient.post(`${this.apiUrl}/login`, '', {headers: this.headers});
  }

  signup(signupBody) {
    this.httpClient.post(`${this.apiUrl}/signup`, signupBody, {headers: this.headers});
  }
}

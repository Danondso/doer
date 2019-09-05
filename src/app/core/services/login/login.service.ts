import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl: string = environment.apiBaseUrl;
  private currentUserSubject: BehaviorSubject<User>;
  private currentUser: Observable<User>;
  constructor(private httpClient: HttpClient) { }

  login(loginBody) {
    const headers = new HttpHeaders().append('Authorization', 'Basic ' + btoa(loginBody.email + ':' + loginBody.password));
    return this.httpClient.post<User>(`${this.apiUrl}/login`, '', {headers}).subscribe(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
    });
  }

  signup(signupBody) {
    this.httpClient.post(`${this.apiUrl}/signup`, signupBody);
  }
}

import { Component, OnInit } from '@angular/core';
import { ThemeService } from './core/services/theme/theme.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from './core/services/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'doer';
  isDarkTheme: Observable<boolean>;

  constructor(private themeService: ThemeService, private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.isDarkTheme = this.themeService.isDarkTheme;
    const currentUserValue = this.loginService.currentUserValue;
    if (currentUserValue) {
       this.router.navigate(['/tasks']);
    }
    this.router.navigate(['/login']);
  }

  toggleDarkTheme(isToggled: boolean) {
    this.themeService.setDarkTheme(isToggled);
  }

}

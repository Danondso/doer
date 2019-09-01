import { Component, OnInit } from '@angular/core';
import { ThemeService } from './core/services/theme/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'doer';
  isDarkTheme: Observable<boolean>;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  toggleDarkTheme(isToggled: boolean) {
    this.themeService.setDarkTheme(isToggled);
  }

}

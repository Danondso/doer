import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { MatSidenavModule, MatButtonModule, MatListModule, MatCardModule, MatGridListModule, MatToolbarModule,
MatIconModule, MatInputModule, MatSlideToggleModule, MatTabsModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateTaskComponent } from './list/create-task/create-task.component';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup/signup.component';
import { AuthGuard } from './core/services/auth/guard/auth.guard.service';
import { ErrorInterceptorService } from './core/interceptors/error-interceptor.service';
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateTaskComponent,
    DateFormatPipe,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatSlideToggleModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    OAuthModule.forRoot(),
  ],
  providers: [AuthGuard, ErrorInterceptorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

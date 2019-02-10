import { JokeService } from './services/joke.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { Routes } from './routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CookieService } from './services/cookie.sevice';
import { AuthGuard } from './guards/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { UserService } from './services/user.service';
import { JokeComponent } from './joke/joke.component';
import { JokesComponent } from './jokes/jokes.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DashboardComponent,
    LoginComponent,
    ProfileComponent,
    JokeComponent,
    JokesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, CookieService, AuthGuard, UserService, JokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

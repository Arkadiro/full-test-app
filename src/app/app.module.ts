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
import { EditGuard } from './guards/edit.guard';
import { ProfileComponent } from './profile/profile.component';
import { UserService } from './services/user.service';
import { JokeComponent } from './joke/joke.component';
import { JokesComponent } from './jokes/jokes.component';
import { NotifyService } from './services/notify.service';
import { NotifyComponent } from './notify/notify.component';
import { HomeComponent } from './home/home.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { WallComponent } from './profile/wall/wall.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';

import { FollowComponent } from './profile/follow/follow.component';
import { FollowService } from './services/follow.service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DashboardComponent,
    LoginComponent,
    ProfileComponent,
    JokeComponent,
    JokesComponent,
    HomeComponent,
    CapitalizePipe,
    WallComponent,
    EditProfileComponent,
    NotifyComponent,
    FollowComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, CookieService, AuthGuard, EditGuard, UserService, JokeService, NotifyService, FollowService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserData } from './classes/UserData';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'full-test-app';
  public user: UserData;
  public userLoggedin = false;

  constructor(private authService: AuthService) {
    this.user = this.authService.getAuthUser();
  }

  ngOnInit() {
    this.userLoggedin = this.authService.isLoggedIn();
  }

  public logout() {
    this.authService.logout();
  }
}

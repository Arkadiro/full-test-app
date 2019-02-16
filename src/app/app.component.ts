import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserData } from './classes/UserData';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'full-test-app';
  public user: UserData;
  private subscription: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.user = this.authService.getAuthUser();
    this.subscription = this.authService.watchStorage().subscribe(() => this.user = this.authService.getAuthUser());
  }

  public logout() {
    this.authService.logout();
  }

  public userLoggedIn() {
    return this.authService.isLoggedIn();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

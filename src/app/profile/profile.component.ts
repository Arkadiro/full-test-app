import { Subscription } from 'rxjs';
import { UserData } from './../classes/UserData';
import { UserService } from './../services/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  public paramsId = 0;
  public id = 0;
  public user: UserData;
  public loaded = false;
  private subscription: Subscription;

  constructor(
    private router: ActivatedRoute,
    private userService: UserService
  ) {
    this.subscription = this.userService.usersProfileUpdated.subscribe(
      (user) => this.user = user
    );
  }

  async ngOnInit() {
    await this.router.params.subscribe((params: Params) => {
      this.paramsId = params.id as number;
    });
    this.user = await this.userService.getUserById(this.paramsId);
    this.id = JSON.parse(localStorage.getItem('user')).id;
    this.loaded = true;
  }

  isAuthUserProfile(): boolean {
    return +this.id === +this.paramsId;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

import { AuthService } from './../services/auth.service';
import { UserData } from './../classes/UserData';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public id: number;
  public user: UserData;


  constructor(private router: ActivatedRoute, private userService: UserService, private authService: AuthService) { }

  async ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
    this.user = await this.userService.getUserById(this.id);
    console.log(this.user);
  }

  isAuthUserProfile(): boolean {
    return this.id === this.authService.getAuthUser().id;
  }

}

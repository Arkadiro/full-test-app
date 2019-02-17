import { NotifyService } from './../../services/notify.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserData } from './../../classes/UserData';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})

export class EditProfileComponent implements OnInit {

  public user: UserData;

  constructor( private authService: AuthService, private userService: UserService, private notifyService: NotifyService) { }

  ngOnInit() {

    this.user = this.authService.getAuthUser();

  }

  public async editProfile() {
    const user: UserData = await this.userService.updateUser(this.user);
    this.authService.updateUser(user);
    this.notifyService.notify('Profile successfully updated!', 'success');
  }

}

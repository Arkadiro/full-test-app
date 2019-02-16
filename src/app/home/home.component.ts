import { UserService } from './../services/user.service';
import { UserData } from './../classes/UserData';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public userName = '';
  public users: UserData[];

  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
    this.userName = this.authService.getAuthUser().name;
  }

}

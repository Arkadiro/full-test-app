import { UserModel } from './../classes/UserModel';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NotifyService } from '../services/notify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private notifyService: NotifyService
    ) {}

  ngOnInit() {
  }

  onSubmit(form) {
    this.authService.login(form.value.email, form.value.password)
      .then((userModel: UserModel) => this.authService.saveUser(userModel));
    // console.log(form.value.email, form.value.password);
    this.notifyService.notify('Successfully logged in', 'success');
  }

}

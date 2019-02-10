import { UserModel } from './../classes/UserModel';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.authService.login(form.value.email, form.value.password)
      .then((userModel: UserModel) => this.authService.saveUser(userModel));
    console.log(form.value.email, form.value.password);
  }

}

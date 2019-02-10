import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private authService: AuthService ) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.authService.register(form.value.name, form.value.email, form.value.password)
      .then((userModel) => {
        this.authService.saveUser(userModel);
      });
    console.log(form.value.name, form.value.email, form.value.password);
  }

}

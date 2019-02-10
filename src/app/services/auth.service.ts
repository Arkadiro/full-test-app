import { UserModel } from './../classes/UserModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './../config/config';
import { Router } from '@angular/router';
import { CookieService } from './cookie.sevice';


@Injectable()
export class AuthService {

  private _sessionId: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService) {
    this._sessionId = cookieService.get('sessionId');
  }

  register(name: string, email: string, password: string): Promise<UserModel> {
    return this.http.post(`${Config.API_URL}/api/signup/`, {name, email, password})
            .toPromise()
            .then((response: UserModel) => {
              const userModel = new UserModel(response.access_token, response.user, response.email);
              return userModel;
            });
  }

  saveUser(userModel: UserModel): void {
    localStorage.setItem('token', userModel.access_token);
    localStorage.setItem('user', userModel.user);
    localStorage.setItem('email', userModel.email);
    this.cookieService.set('token', userModel.access_token);
    this.router.navigate(['/dashboard']);
  }

  login(email: string, password: string): Promise<UserModel> {
    return this.http.post(`${Config.API_URL}/api/login`, {email, password})
      .toPromise()
      .then((response: UserModel) => {
        const userModel = new UserModel(response.access_token, response.user, response.email);
        return userModel;
      });
  }

  public set sessionId(value: string) {
    this._sessionId = value;
    this.cookieService.set('sessionId', value);
  }

}

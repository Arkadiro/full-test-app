import { UserModel } from './../classes/UserModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './../config/config';
import { Router } from '@angular/router';
import { CookieService } from './cookie.sevice';
import { UserData } from '../classes/UserData';
import { Subject, Observable} from 'rxjs';


@Injectable()
export class AuthService {

  public userLoggedIn = false;
  public user: UserData;
  private _sessionId: string;
  private storageSub: Subject<string> = new Subject();

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService,
  ) {
    this._sessionId = cookieService.get('sessionId');
  }

  register(name: string, email: string, password: string): Promise<UserModel> {
    localStorage.clear();
    return this.http.post(`${Config.API_URL}/api/signup/`, {name, email, password})
            .toPromise()
            .then((response: UserModel) => {
              const userModel = new UserModel(response.access_token, response.data);
              return userModel;
            });
  }

  saveUser(userModel: UserModel): void {
    localStorage.clear();
    localStorage.setItem('token', userModel.access_token);
    localStorage.setItem('user', JSON.stringify(userModel.data));
    // this.cookieService.set('token', userModel.access_token);
    this.storageSub.next('changed');
    this.router.navigate(['/']);
  }

  updateUser(user: UserData): void {
    localStorage.removeItem('user');
    localStorage.setItem('user', JSON.stringify(user));
    this.storageSub.next('changed')
  }

  login(email: string, password: string): Promise<UserModel> {
    localStorage.clear();
    return this.http.post(`${Config.API_URL}/api/login`, {email, password})
      .toPromise()
      .then((response: UserModel) => {
        const userModel = new UserModel(response.access_token, response.data);
        return userModel;
      });
      // .finally(() => location.reload() );
  }

  logout() {
    localStorage.clear();
    this.cookieService.remove();
    this.router.navigate(['/auth/login']);
    this.storageSub.next('changed');
    // location.reload();
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    }
    return false;
  }

  watchStorage(): Observable<any> {
    return this.storageSub.asObservable();
  }

  getAuthUser() {
    if (localStorage.getItem('user') !== null) {
      const user = JSON.parse(localStorage.getItem('user'));
      console.log(user);
      return user;

    } else {
      return new UserData('0', 'guest', '', '');
    }
  }

  getToken() {
    return localStorage.getItem('token');
  }

  public set sessionId(value: string) {
    this._sessionId = value;
    this.cookieService.set('sessionId', value);
  }

}

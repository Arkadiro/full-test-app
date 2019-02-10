import { Config } from './../config/config';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { UserData } from '../classes/UserData';
import { UserModel } from '../classes/UserModel';

@Injectable()
export class UserService {

  private httpOptions;

  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) {

    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization':  `Bearer ${this.authService.getToken()}`
      })
    };

  }

  getUserById(id: number) {
    if (id === this.authService.getAuthUser().id) {
      return this.authService.getAuthUser();
    }

    return this.http.post(`${Config.API_URL}/api/user?id=${id}`, id, this.httpOptions)
      .toPromise()
      .then((response: any) => {
        const userData = new UserData(response.data.id, response.data.name, response.data.email);
        return userData;
      });
  }
}

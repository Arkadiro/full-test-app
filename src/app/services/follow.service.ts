import { Config } from '../config/config';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
class Follow {
  user: number;
  follower: number;
}

@Injectable()
export class FollowService {

  private httpOptions;

  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) {

    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization':  `Bearer ${this.authService.getToken()}`,
        'Access-Control-Allow-Origin': '*'
      })
    };

  }

  addFollow(user: number, follower: number) {
    const followModel  = new Follow();
    followModel.user = +user;
    followModel.follower = +follower;
    return this.http.post(`${Config.API_URL}/api/follow/`, {followModel}, this.httpOptions)
      .toPromise()
      .then((response) => {
        const followMod = response;
        console.log(followMod);
        return followMod;
      });
  }

  isFollow(user: number, follower: number) {
    const followModel  = new Follow();
    followModel.user = +user;
    followModel.follower = +follower;
    return this.http.post(`${Config.API_URL}/api/isfollow/`, {followModel}, this.httpOptions)
            .toPromise()
            .then((response: boolean | ArrayBuffer) => {
              return response as boolean;
            });
  }

  unFollow(user: number, follower: number) {
    const followModel  = new Follow();
    followModel.user = +user;
    followModel.follower = +follower;
    return this.http.post(`${Config.API_URL}/api/unfollow/`, {followModel}, this.httpOptions)
            .toPromise()
            .then((response) => {
              console.log(response);
              return response;
            });
  }
}

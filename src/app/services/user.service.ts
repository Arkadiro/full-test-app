import { Config } from './../config/config';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { AuthService } from './auth.service';
import { UserData } from '../classes/UserData';

@Injectable()
export class UserService {

  public users: UserData[] = [];
  public usersProfileUpdated: EventEmitter<UserData>;

  private httpOptions;

  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) {
    this.usersProfileUpdated = new EventEmitter();
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization':  `Bearer ${this.authService.getToken()}`
      })
    };

  }

  getUserById(id) {
    return this.http.post(`${Config.API_URL}/api/user`, {id}, this.httpOptions)
      .toPromise()
      .then((response: any) => {
        const userData = new UserData(response.data.id, response.data.name, response.data.email);
        return userData;
      });
   }

   updateUser(user: UserData) {
    return this.http.put(`${Config.API_URL}/api/update/user`, {user}, this.httpOptions)
      .toPromise()
      .then((response: any) => {
        const userData = new UserData(response.id, response.name, response.email);
        this.usersProfileUpdated.emit(userData);
        return userData;
      });
   }

  getUsers() {
    if (this.users.length === 0) {
      return this.http.post(`${Config.API_URL}/api/users`, this.httpOptions)
        .toPromise()
        .then((response: any) => {
          this.users.push(response.data);
          return this.users;
        });
    } else {
    return this.users;
    }
  }
}

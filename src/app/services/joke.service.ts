import { Config } from '../config/config';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
class Joke {
  title: string;
  body: string;
  author: string;
}

@Injectable()
export class JokeService {
  private author = '';
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

  addJoke(title: string, body: string) {
    this.author = this.authService.getAuthUser().name;
    const author = this.author;
    return this.http.post(`${Config.API_URL}/api/addjoke/`, {title, body, author})
            .toPromise()
            .then((response: Joke) => {
              const joke: Joke = response;
              return joke;
            });
  }

  getJoke() {
    return this.http.post(`${Config.API_URL}/api/jokes/`, this.httpOptions)
            .toPromise()
            .then((response: Joke[]) => {
              const joke: Joke[] = response;
              return joke;
            });
  }
}

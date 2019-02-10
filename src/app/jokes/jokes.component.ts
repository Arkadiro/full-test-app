import { JokeService } from './../services/joke.service';
import { Component, OnInit } from '@angular/core';
import { Joke } from '../classes/Joke';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {
  public jokes: Array<Joke> = [];

  constructor(private jokeService: JokeService) { }

  ngOnInit() {
    this.jokeService.getJoke().then((res: Array<Joke>) => {
      this.jokes = res;
    });
  }

}

import { ActivatedRoute } from '@angular/router';
import { JokeService } from './../../services/joke.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  public jokes = [];

  constructor(private jokeService: JokeService, private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    const userId = this.activatedRoute.snapshot.params.id;
    console.log(userId);
    this.jokes = await this.jokeService.getUserJokes(userId);
  }

}

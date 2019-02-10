import { JokeService } from '../services/joke.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  constructor( private jokeService: JokeService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form.value.title);
    this.jokeService.addJoke(form.value.title, form.value.body)
      .then((res) => { console.log(res); } );
    this.router.navigate(['/jokes']);
  }

}

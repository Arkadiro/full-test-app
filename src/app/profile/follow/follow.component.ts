import { FollowService } from './../../services/follow.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit {

  @Input()
  currentProfileId;
  public isfollowing: any = false;

  constructor(private followService: FollowService) { }

  async ngOnInit() {
    const id = JSON.parse(localStorage.getItem('user')).id;
    this.isfollowing = await this.followService.isFollow(this.currentProfileId, id) as boolean;
    console.log(this.isfollowing);
  }

  follow() {
    const id = JSON.parse(localStorage.getItem('user')).id;
    this.followService.addFollow(this.currentProfileId, id);
  }

  unFollow() {
    const id = JSON.parse(localStorage.getItem('user')).id;
    this.followService.unFollow(this.currentProfileId, id);
  }

}

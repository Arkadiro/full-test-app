import { NotifyService } from './../../services/notify.service';
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
  public isfollowing = false;

  constructor(private followService: FollowService, private notifyService: NotifyService) { }

  async ngOnInit() {
    const id = JSON.parse(localStorage.getItem('user')).id;
    this.isfollowing = await this.followService.testFollow(this.currentProfileId, id);
    console.log(this.isfollowing);
  }

  follow() {
    const id = JSON.parse(localStorage.getItem('user')).id;
    this.followService.addFollow(this.currentProfileId, id).finally(
      () => {this.isfollowing = true;}
    );
  }

  unFollow() {
    const id = JSON.parse(localStorage.getItem('user')).id;
    this.followService.unFollow(this.currentProfileId, id).finally(
      () => {this.isfollowing = false;}
    );
  }

}

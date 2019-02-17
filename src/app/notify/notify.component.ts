import { Message } from './../classes/Message';
import { NotifyService } from './../services/notify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {

  public message: Message;

  constructor(
    private notifyService: NotifyService
  ) {
    this.notifyService.newMessageRecieved.subscribe(
      (message) => this.newMessageRecieved(message)
    )
  }

  public newMessageRecieved(message: Message) {
    this.message = message;
  }

  ngOnInit() {
  }

}

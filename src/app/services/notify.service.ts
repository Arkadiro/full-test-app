import { Injectable, EventEmitter } from '@angular/core';
import { Message } from '../classes/Message';


@Injectable()
export class NotifyService {

  public newMessageRecieved: EventEmitter<Message>;

  constructor() {
    this.newMessageRecieved = new EventEmitter();
  }

  notify(message: string, status: string) {
    const newMessage =  new Message(message, status);
    this.newMessageRecieved.emit(newMessage);
    setTimeout(() => {
      this.newMessageRecieved.emit();
    }, 4000);
  }
}

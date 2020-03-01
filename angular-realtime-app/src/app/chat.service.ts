import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Message } from './message';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket) { }

  public sendMessage(message) {
    this.socket.emit('new-message', message);
  }

  public getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('new-message', (message) => {
        console.log(message);
        observer.next(message);
      });
    });
  }
}

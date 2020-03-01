import { Component } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newMessage: string;
  messageList: string [] = [];
  constructor(private chatService: ChatService) {

  }

  sendMessage() {
    this.chatService.sendMessage(this.newMessage);
    this.newMessage = '';
  }
  
  ngOnInit() {
    console.log('hello');
    this.chatService
    .getMessages()
    .subscribe((message: string) => {
      this.messageList.push(message);

    });

    console.log('fin');
  }
}

import { Component, OnInit } from '@angular/core';
import { Message } from '@app/models';
import { ChatService } from '@app/services';
import { Observable, of } from 'rxjs';
import { map, scan } from 'rxjs/operators';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.scss'],
})
export class ChatDialogComponent implements OnInit {
  messages: Observable<Message[]> = of([]);
  formValue = '';
  constructor(public chat: ChatService) {}
  ngOnInit(): void {
    // appends to array after each new message is added to feedSource
    this.messages = this.chat.conversation.pipe(
      scan((acc, val) => acc.concat(val))
    );
  }
  sendMessage(): void {
    this.chat.converse(this.formValue);
    this.formValue = '';
  }
}

import { Injectable } from '@angular/core';
import { Message, Response } from '@app/models';
import { environment } from '@env/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ChatService {
  conversation = new BehaviorSubject<Message[]>([]);

  constructor(private http: HttpClient) {}

  converse(msg: string): void {
    const userMessage = new Message(
      environment.dialogflow.projectID,
      msg,
      'USER',
      new Date()
    );

    this.update(userMessage);
    this.http
      .post<Response>('http://localhost:3000/api/requestText', userMessage)
      .subscribe((res) => {
        if (res && res.responseMessage != null) {
          this.update({
            content: res.responseMessage,
            sentBy: 'BOT',
            timestamp: new Date(),
          } as Message);
        }
      });
  }

  // Adds message to source

  update(msg: Message): void {
    this.conversation.next([msg]);
  }
}

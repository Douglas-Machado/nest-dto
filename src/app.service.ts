import { Injectable } from '@nestjs/common';
import { CreateMessageDTO } from './DTO/create-message.dto';
import { Observable, of } from 'rxjs';

@Injectable()
export class AppService {
  private messages: IMessage[] = [];
  private id: number = 1;
  getHello(): IMessage[] {
    return this.messages;
  }

  autoIncrementId() {
    return this.id++;
  }
  createMessage(message: CreateMessageDTO): Observable<object[]> {
    let message_id = this.autoIncrementId();
    message._id = message_id;
    this.messages.push(message);
    return of(this.messages);
  }
}

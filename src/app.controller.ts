import {
  Body,
  Controller,
  Get,
  Post,
  Response,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateMessageDTO } from './DTO/create-message.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): IMessage[] {
    return this.appService.getHello();
  }

  @Post()
  createMessage(
    @Response() res, @Body() createMessageDTO: CreateMessageDTO,
  ): any {
    this.appService.createMessage(createMessageDTO).subscribe((messages) => {
      return res.json(messages);
    });
  }
}

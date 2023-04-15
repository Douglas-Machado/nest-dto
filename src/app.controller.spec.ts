import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Response } from '@nestjs/common';
import { of } from 'rxjs';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('runGetTest', () => {
    it('should an array of messages!', () => {
      const result = [{ _id: 1, message: 'hello!', user_id: 1 }];
      jest.spyOn(appService, 'getHello').mockImplementation(() => result);
      expect(appController.getHello()).toBe(result);
    });
  });

  const message = { message: 'hello!', user_id: 1 };
  const result = [{ _id: 1, message: 'hello!', user_id: 1 }];

  describe('runPostTest', () => {
    it('should an array of messages!', () => {
      jest.spyOn(appService, 'createMessage').mockImplementation(() => of(result));
      appService.createMessage(message).subscribe((res) => {
        expect(res).toEqual(result);
      });
    });
  });
});

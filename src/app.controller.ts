import { Controller, Get, Inject } from '@nestjs/common';
import { AppService, } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('IS_DEV') readonly isDev: { isDev: boolean },
  ) {}

  @Get()
  getHello(): string {
    console.log(this.isDev)
    return this.appService.getHello();
  }
}

import { Module, DynamicModule } from '@nestjs/common';
import { LogService } from './log.service';

@Module({
  providers: [LogService],
  exports: [LogService],
})
export class LogModule {
  static register(prefix: string): DynamicModule {
    return {
      module: LogModule,
      providers: [
        LogService,
        {
          provide: 'PREFIX',
          useValue: prefix,
        }
      ],
      exports: [LogService]
    }
  }
}

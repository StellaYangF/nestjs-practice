import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { LogService } from '../log/log.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly logService: LogService,
    ) {}

    @Get()
    async userList(): Promise<any[]> {
        this.logService.log('运行了 userList 控制器')
        return await this.userService.userList();
    }
}

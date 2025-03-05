import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.listAll();
  }

  @Post('/crete')
  createUser(@Body() body: string) {
    console.log(body);
    return this.userService.create(body);
  }
}

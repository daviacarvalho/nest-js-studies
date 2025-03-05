import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  getTasks(@Query('limit') limit: string) {
    console.log(limit);
    return this.taskService.listAll();
  }

  @Get(':id')
  getTask(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @Post('/create')
  createTask(@Body() body: string) {
    console.log(body);
    return this.taskService.create(body);
  }

  @Patch(':id')
  updateTask(@Body() body: string, @Param('id') id: string) {
    console.log(body);
    return this.taskService.update(body, id);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    console.log(id);
    return this.taskService.delete(id);
  }
}

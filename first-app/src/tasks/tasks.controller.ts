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
import { Task } from './entities/task.entity';

@Controller('/tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  getTasks(@Query('limit') limit: string) {
    return this.taskService.listAll(limit);
  }

  @Get(':id')
  getTask(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @Post('/create')
  createTask(@Body() body: { name: string; description?: string }) {
    return this.taskService.create(body);
  }

  @Patch(':id')
  updateTask(@Body() body: Partial<Task>, @Param('id') id: string) {
    return this.taskService.update(body, id);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
}

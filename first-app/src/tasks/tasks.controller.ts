import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task-dto';
import { UpdateTaskDto } from './dto/update-task-dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('/tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  getTasks(@Query() paginationDto: PaginationDto) {
    console.log(paginationDto);
    return this.taskService.listAll(paginationDto);
  }

  @Get(':id')
  getTask(@Param('id') id: number) {
    return this.taskService.findOne(id);
  }

  @Post('/create')
  createTask(@Body() createTaskDto: CreateTaskDto) {
    console.log(createTaskDto);
    return this.taskService.create(createTaskDto);
  }

  @Patch(':id')
  updateTask(@Body() body: UpdateTaskDto, @Param('id') id: number) {
    return this.taskService.update(body, id);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: number) {
    return this.taskService.delete(id);
  }
}

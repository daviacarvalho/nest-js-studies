import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task-dto';
import { UpdateTaskDto } from './dto/update-task-dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}
  async listAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;

    const tasks = await this.prisma.task.findMany({
      take: limit,
      skip: offset,
    });

    return tasks;
  }

  async findOne(id: number) {
    const task = await this.prisma.task.findFirst({
      where: {
        id: id,
      },
    });

    if (!task?.name) {
      throw new HttpException('task not found', HttpStatus.NOT_FOUND);
    }
  }

  async create(createTaskDto: CreateTaskDto) {
    const newTask = await this.prisma.task.create({
      data: {
        name: createTaskDto.name,
        description: createTaskDto.description,
        completed: createTaskDto.completed ?? false,
      },
    });

    return newTask;
  }

  async update(body: UpdateTaskDto, id: number) {
    const findTask = await this.prisma.task.findFirst({
      where: { id: Number(id) },
    });

    if (!findTask) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }

    const updatedTask = await this.prisma.task.update({
      where: {
        id: findTask.id,
      },
      data: body,
    });

    return updatedTask;
  }

  async delete(id: number) {
    const findTask = await this.prisma.task.findFirst({
      where: { id: Number(id) },
    });

    if (!findTask) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }

    const deletedTask = await this.prisma.task.delete({
      where: { id: findTask.id },
    });

    return deletedTask;
  }
}

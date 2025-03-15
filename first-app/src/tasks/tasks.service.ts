import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task-dto';
import { UpdateTaskDto } from './dto/update-task-dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  private tasks: Task[] = [
    {
      id: 1,
      name: 'Go to walmart',
      description: 'Needing lunch',
    },
  ];

  async listAll() {
    const tasks = await this.prisma.task.findMany();
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

  update(body: UpdateTaskDto, id: string): string {
    const taskIndex = this.tasks.findIndex((task) => task.id == Number(id));

    if (taskIndex < 0) {
      throw new NotFoundException('Task not found ');
    }

    if (taskIndex >= 0) {
      const taskItem: Task = this.tasks[taskIndex];

      this.tasks[taskIndex] = {
        ...taskItem,
        ...body,
      };
    }
    return 'Task updated';
  }

  delete(id: string) {
    return id;
  }
}

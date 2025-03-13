import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task-dto';
import { UpdateTaskDto } from './dto/update-task-dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: 1,
      name: 'Go to walmart',
      description: 'Needing lunch',
    },
  ];

  listAll(limit?: string) {
    console.log(limit);
    return this.tasks;
  }

  findOne(id: string) {
    const task = this.tasks.find((task) => task.id == Number(id));

    if (task) {
      return task;
    }

    throw new NotFoundException('Task not found');
  }

  create(body: CreateTaskDto) {
    const newId = this.tasks.length + 1;

    const newTask = {
      id: newId,
      ...body,
    };

    this.tasks.push(newTask);
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

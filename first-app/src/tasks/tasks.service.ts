import { Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';

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
    return this.tasks.find((task) => task.id == Number(id));
  }

  create(body: { name: string; description?: string }) {
    const newId = this.tasks.length + 1;

    const newTask = {
      id: newId,
      ...body,
    };

    this.tasks.push(newTask);
    return newTask;
  }

  update(body: Partial<Task>, id: string): string {
    const taskIndex = this.tasks.findIndex((task) => task.id == Number(id));
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

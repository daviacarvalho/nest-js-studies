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

  listAll() {
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

  update(body: string, id: string) {
    console.log('Updating task where ID: ' + id);
    return body;
  }

  delete(id: string) {
    console.log('Deleting task where ID: ' + id);
    return id;
  }
}

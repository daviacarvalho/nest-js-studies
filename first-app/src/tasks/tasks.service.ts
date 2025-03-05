import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  listAll() {
    return [
      { id: 1, task: 'Go to walmart' },
      { id: 2, task: 'Make dinner' },
    ];
  }

  findOne(id: string) {
    return 'Searching for tasks with ID: ' + id;
  }

  create(body: string) {
    return body;
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

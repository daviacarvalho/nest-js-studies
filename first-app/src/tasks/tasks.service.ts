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
}

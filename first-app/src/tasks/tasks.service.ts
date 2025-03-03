import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  listAllTasks() {
    return [
      { id: 1, task: 'Go to walmart' },
      { id: 2, task: 'Make dinner' },
    ];
  }

  findOneTask() {
    return 'Make dinner';
  }
}

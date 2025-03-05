import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  listAll() {
    return [
      { id: 1, name: 'davi' },
      { id: 2, name: 'rodrigo' },
    ];
  }

  create(body: string) {
    return body;
  }
}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'alfred', email: 'alfygitau@gmail.com' },
    { username: 'kim', email: 'kim@gmail.com' },
    { username: 'johny', email: 'johny@gmail.com' },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }
  createUser(user: CreateUserDto) {
    this.fakeUsers.push(user);
    return user;
  }
  fetchUserByUsername(username: string) {
    const user = this.fakeUsers.find((user) => user.username === username);
    if (!user) throw new HttpException('user not found', HttpStatus.NOT_FOUND);
    return user;
  }
}

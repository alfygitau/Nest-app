import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { AuthenticateGuard } from 'src/users/guards/authenticate/authenticate.guard';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  @UseGuards(AuthenticateGuard)
  getUsers() {
    return this.userService.fetchUsers();
  }

  @Post('register')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userPayload: CreateUserDto) {
    return this.userService.createUser(userPayload);
  }

  @Get(':username')
  getUserById(
    @Param('username') username: string,
    @Query('product') product: string,
  ) {
    return this.userService.fetchUserByUsername(username);
  }
}

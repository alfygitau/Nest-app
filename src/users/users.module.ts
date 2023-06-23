import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { AuthMiddleware } from './middlewares/auth/auth.middleware';
import { AdminMiddleware } from './middlewares/admin/admin.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes('users')
      .apply(AdminMiddleware)
      .forRoutes('users');
  }
}

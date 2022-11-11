import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GetDesignTokenModule } from './get-design-token/get-design-token.module';

@Module({
  imports: [UsersModule, GetDesignTokenModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

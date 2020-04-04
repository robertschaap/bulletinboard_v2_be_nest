import { Module } from '@nestjs/common';
import { CommentsModule } from './comments/comments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './typeorm.config';

@Module({
  imports: [
    CommentsModule,
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
})
export class AppModule {}

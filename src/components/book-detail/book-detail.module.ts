import { Module } from '@nestjs/common';
import { BookDetailService } from './book-detail.service';
import { BookDetailController } from './book-detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookDetail } from './entities/book-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookDetail])],
  controllers: [BookDetailController],
  providers: [BookDetailService],
})
export class BookDetailModule {}

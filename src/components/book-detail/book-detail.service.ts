import { Injectable } from '@nestjs/common';
import { CreateBookDetailDto } from './dto/create-book-detail.dto';
import { UpdateBookDetailDto } from './dto/update-book-detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BookDetail } from './entities/book-detail.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookDetailService {
  constructor(
    @InjectRepository(BookDetail)
    private bookDetailRepo: Repository<BookDetail>,
  ) {}

  create(createBookDetailDto: CreateBookDetailDto) {
    return 'This action adds a new bookDetail';
  }

  findAll() {
    return `This action returns all bookDetail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bookDetail`;
  }

  update(id: number, updateBookDetailDto: UpdateBookDetailDto) {
    return `This action updates a #${id} bookDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} bookDetail`;
  }
}

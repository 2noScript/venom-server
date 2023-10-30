import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Genre } from '../genre/entities/genre.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
    @InjectRepository(Genre)
    private genreRepository: Repository<Genre>,
  ) {}

  async create(item: CreateBookDto) {
    const genres = await this.genreRepository.findBy(
      item.genres.map((it) => ({ name: it })),
    );

    const book = this.bookRepository.create({ ...item, genres });
    return await this.bookRepository.save(book);
  }

  async createMultiple(books: CreateBookDto[]) {
    for (const book of books) {
      const existingItem = await this.bookRepository.findOne({
        where: { identifier: book.identifier },
        relations: ['genres'],
      });
      const genres = await this.genreRepository.findBy(
        book.genres.map((it) => ({ name: it })),
      );
      if (existingItem) {
        const { name, link, avatar } = book;
        await this.bookRepository.save({
          ...existingItem,
          name,
          link,
          avatar,
          genres,
        });
      } else {
        const newBook = this.bookRepository.create({ ...book, genres });
        await this.bookRepository.save(newBook);
      }
    }
    return 'done';
  }

  async remove(id: number) {
    const item = await this.bookRepository.findOneBy({ id });
    if (!item) {
      throw new NotFoundException(`Item with id not found ${id}`);
    }
    await this.bookRepository.remove(item);
  }

  async findAll(page: number, limit: number) {
    const skip = (page - 1) * limit;
    return await this.bookRepository.find({
      relations: ['genres'],
      skip: skip,
      take: limit,
    });
  }
}

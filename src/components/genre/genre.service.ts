import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

import { CreateGenreDto } from './dto/create-genre.dto';
import { Genre } from './entities/genre.entity';

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(Genre)
    private genreRepo: Repository<Genre>,
  ) {}

  async createMany(createGenreDto: CreateGenreDto[]) {
    for (const item of createGenreDto) {
      const existingItem = await this.genreRepo.findOne({
        where: {
          name: item.name,
        },
      });
      if (existingItem) {
        existingItem.identifier = item.identifier;
        await this.genreRepo.save(existingItem);
      } else {
        const newGenre = this.genreRepo.create({ ...item });
        await this.genreRepo.save(newGenre);
      }
    }
    return 'done';
  }

  async findAll() {
    return await this.genreRepo.find();
  }
  async findByIds(ids: number[]) {
    return await this.genreRepo.find({ where: { id: In(ids) } });
  }

  // update(id: number, updateGenreDto: UpdateGenreDto) {
  //   return `This action updates a #${id} genre`;
  // }

  async remove(id: number) {
    const item = await this.genreRepo.findOne({
      where: {
        id,
      },
      relations: ['books'],
    });
    if (!item) {
      throw new NotFoundException(`Item with id not found ${id}`);
    }
    await this.genreRepo.remove(item);
  }
}

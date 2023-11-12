import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookDetailService } from './book-detail.service';
import { CreateBookDetailDto } from './dto/create-book-detail.dto';
import { UpdateBookDetailDto } from './dto/update-book-detail.dto';

@Controller('book-detail')
export class BookDetailController {
  constructor(private readonly bookDetailService: BookDetailService) {}

  @Post()
  create(@Body() createBookDetailDto: CreateBookDetailDto) {
    return this.bookDetailService.create(createBookDetailDto);
  }

  @Get()
  findAll() {
    return this.bookDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookDetailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDetailDto: UpdateBookDetailDto) {
    return this.bookDetailService.update(+id, updateBookDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookDetailService.remove(+id);
  }
}

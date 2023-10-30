import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { BookService } from './book.service';
import {
  ApiBody,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateBookDto } from './dto';

@ApiTags('Book')
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async create(@Body() book: CreateBookDto) {
    return await this.bookService.create(book);
  }

  @Post('create-multiple')
  @ApiBody({ type: [CreateBookDto] })
  async createMultiple(@Body() books: CreateBookDto[]) {
    return await this.bookService.createMultiple(books);
  }

  @ApiOperation({ summary: 'Get all entities with pagination' })
  @ApiQuery({
    name: 'page',
    type: Number,
    description: 'Page number',
    required: false,
  })
  @ApiQuery({
    name: 'limit',
    type: Number,
    description: 'Number of items per page',
    required: false,
  })
  @ApiResponse({ status: 200, description: 'Return all entities' })
  @Get()
  async findAll(
    @Query('page', ParseIntPipe) page = 1,
    @Query('limit', ParseIntPipe) limit = 10,
  ) {
    return await this.bookService.findAll(page, limit);
  }
  @Delete('remove/:id')
  async remove(@Param('id') id: number) {
    return await this.bookService.remove(id);
  }
}

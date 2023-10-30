import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiBody, ApiQuery, ApiTags } from '@nestjs/swagger';
import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@ApiTags('Genre')
@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Post()
  @ApiBody({ type: [CreateGenreDto] })
  createMany(@Body() createGenreDto: CreateGenreDto[]) {
    return this.genreService.createMany(createGenreDto);
  }

  @Get()
  findAll() {
    return this.genreService.findAll();
  }

  @Get('/by-ids')
  @ApiQuery({ name: 'ids', type: [Number], explode: true })
  findByIds(@Query('ids') ids: number[]) {
    return this.genreService.findByIds(ids);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateGenreDto: UpdateGenreDto) {
  //   return this.genreService.update(+id, updateGenreDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.genreService.remove(+id);
  }
}

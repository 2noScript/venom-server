import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

export class CreateBookDto {
  @ApiProperty()
  identifier: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  avatar: string;
  @ApiProperty()
  link: string;
  @ApiProperty({ type: [String] })
  genres: string[];
  // @ApiProperty({ type: [CreateGenreDto] })
  // dk: CreateGenreDto[];
}

export class UpdateBookDto extends PartialType(CreateBookDto) {}

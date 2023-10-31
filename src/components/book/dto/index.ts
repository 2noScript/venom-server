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
  @ApiProperty()
  description: string;
  @ApiProperty({ type: [String] })
  genres: string[];
}

export class UpdateBookDto extends PartialType(CreateBookDto) {}

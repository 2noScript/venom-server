import { PartialType } from '@nestjs/swagger';
import { CreateBookDetailDto } from './create-book-detail.dto';

export class UpdateBookDetailDto extends PartialType(CreateBookDetailDto) {}

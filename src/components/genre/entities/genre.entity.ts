import { Book } from 'src/components/book/entities/book.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity()
export class Genre {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  identifier: string;
  @Column()
  name: string;
  @ManyToMany(() => Book, (book) => book.genres)
  books: Book[];
}

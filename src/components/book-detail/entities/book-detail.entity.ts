import { Book } from 'src/components/book/entities/book.entity';
import { Supplier } from 'src/components/supplier/entities/supplier.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class BookDetail {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  avatar: string;
  @Column()
  refLink: string;

  @Column()
  comicId: number;
  @Column()
  supplierId: number;
  @Column()
  bookId: number;

  @ManyToOne(() => Supplier, { eager: true })
  @JoinColumn({ name: 'supplierId' })
  supplier: Supplier;

  @ManyToOne(() => Book, { eager: true })
  @JoinColumn({ name: 'bookId' })
  book: Book;
}

import { BookDetail } from 'src/components/book-detail/entities/book-detail.entity';
import { Genre } from 'src/components/genre/entities/genre.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeUpdate,
  JoinTable,
  ManyToMany,
  BeforeRemove,
  OneToMany,
} from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 10, unique: true })
  identifier: string;
  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToMany(() => Genre, (genre) => genre.books, {
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinTable()
  genres: Genre[];

  @OneToMany(() => BookDetail, (bookDetail) => bookDetail.book, {
    onDelete: 'CASCADE',
  })
  bookDetail: BookDetail;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @BeforeInsert()
  updateTimestampsOnCreate() {
    this.created_at = new Date();
    this.updated_at = new Date();
  }
  @BeforeUpdate()
  updateTimestampsOnUpdate() {
    this.updated_at = new Date();
  }
  @BeforeRemove()
  removeGenres() {
    this.genres.splice(0, this.genres.length);
  }
}

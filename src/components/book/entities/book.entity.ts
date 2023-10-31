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
  avatar: string;
  @Column()
  link: string;
  @Column()
  description: string;
  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @ManyToMany(() => Genre, (genre) => genre.books, { onDelete: 'CASCADE' })
  @JoinTable()
  genres: Genre[];

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

import { BookDetail } from 'src/components/book-detail/entities/book-detail.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Supplier {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 50, unique: true })
  name: string;

  @OneToMany(() => BookDetail, (bookDetail) => bookDetail.supplier, {
    onDelete: 'CASCADE',
  })
  bookDetail: BookDetail;
}

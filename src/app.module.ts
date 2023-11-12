import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { BookModule } from './components/book/book.module';
import { DataSource } from 'typeorm';
import { GenreModule } from './components/genre/genre.module';
import { SupplierModule } from './components/supplier/supplier.module';
import { BookDetailModule } from './components/book-detail/book-detail.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    DatabaseModule,
    BookModule,
    GenreModule,
    SupplierModule,
    BookDetailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

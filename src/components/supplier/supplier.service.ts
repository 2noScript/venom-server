import { Injectable } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Supplier } from './entities/supplier.entity';

@Injectable()
export class SupplierService {
  constructor(
    @InjectRepository(Supplier) private supplierRepo: Repository<Supplier>,
  ) {}

  async create(name: string) {
    console.log(name);
    const newSupplier = this.supplierRepo.create({ name });
    return await this.supplierRepo.save(newSupplier);
  }

  async findAll() {
    return this.supplierRepo.find();
  }

  update(id: number, updateSupplierDto: UpdateSupplierDto) {
    return `This action updates a #${id} supplier`;
  }

  async remove(id: number) {
    return await this.supplierRepo.delete(id);
  }
}

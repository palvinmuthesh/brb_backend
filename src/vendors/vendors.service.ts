import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vendor, VendorDocument } from './entities/vendor.entity';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';

@Injectable()
export class VendorsService {
  constructor(
    @InjectModel(Vendor.name) private vendorModel: Model<VendorDocument>,
  ) {}

  create(createVendorDto: CreateVendorDto) {
    return this.vendorModel.create(createVendorDto);
  }

  findAll() {
    return this.vendorModel.find().exec();
  }

  async findOne(id: string) {
    const vendor = await this.vendorModel.findById(id).exec();
    if (!vendor) throw new NotFoundException('Vendor not found');
    return vendor;
  }

  async update(id: string, updateVendorDto: UpdateVendorDto) {
    const vendor = await this.vendorModel.findByIdAndUpdate(id, updateVendorDto, { new: true });
    if (!vendor) throw new NotFoundException('Vendor not found');
    return vendor;
  }

  async remove(id: string) {
    const vendor = await this.vendorModel.findByIdAndDelete(id);
    if (!vendor) throw new NotFoundException('Vendor not found');
    return vendor;
  }
}

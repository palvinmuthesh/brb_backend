import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VendorsService } from './vendors.service';
import { VendorsController } from './vendors.controller';
import { Vendor, VendorSchema } from './entities/vendor.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Vendor.name, schema: VendorSchema }])],
  controllers: [VendorsController],
  providers: [VendorsService],
})
export class VendorsModule {}

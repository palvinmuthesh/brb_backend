import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReportingService } from './reporting.service';
import { ReportingController } from './reporting.controller';
import { Reporting, ReportingSchema } from './entities/reporting.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Reporting.name, schema: ReportingSchema }])],
  controllers: [ReportingController],
  providers: [ReportingService],
})
export class ReportingModule {}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reporting } from './entities/reporting.entity';
// import { CreateReportingDto, UpdateReportingDto } from './dto';
import { CreateReportingDto } from './dto/create-reporting.dto';
import { UpdateReportingDto } from './dto/update-reporting.dto';

@Injectable()
export class ReportingService {
  constructor(
    @InjectModel(Reporting.name) private readonly reportingModel: Model<Reporting>,
  ) {}

  async create(dto: CreateReportingDto): Promise<Reporting> {
    return await this.reportingModel.create(dto);
  }

  async findAll(): Promise<Reporting[]> {
    return this.reportingModel.find().exec();
  }

  async findOne(id: string): Promise<Reporting> {
    const report = await this.reportingModel.findById(id);
    if (!report) throw new NotFoundException('Report not found');
    return report;
  }

  async update(id: string, dto: UpdateReportingDto): Promise<Reporting> {
    const report = await this.reportingModel.findByIdAndUpdate(id, dto, { new: true });
    if (!report) throw new NotFoundException('Report not found');
    return report;
  }

  async remove(id: string): Promise<void> {
    const report = await this.reportingModel.findByIdAndDelete(id);
    if (!report) throw new NotFoundException('Report not found');
  }
}

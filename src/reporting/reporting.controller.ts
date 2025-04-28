import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReportingService } from './reporting.service';
// import { CreateReportingDto, UpdateReportingDto } from './dto';
import { CreateReportingDto } from './dto/create-reporting.dto';
import { UpdateReportingDto } from './dto/update-reporting.dto';

@Controller('reportings')
export class ReportingController {
  constructor(private readonly reportingService: ReportingService) {}

  @Post()
  create(@Body() dto: CreateReportingDto) {
    return this.reportingService.create(dto);
  }

  @Get()
  findAll() {
    return this.reportingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reportingService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateReportingDto) {
    return this.reportingService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reportingService.remove(id);
  }
}

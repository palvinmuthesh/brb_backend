import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateReportingDto {
  @IsNotEmpty()
  @IsString()
  bookingId: string;

  @IsNotEmpty()
  @IsString()
  reportType: string;

  @IsOptional()
  @IsString()
  details?: string;

  @IsOptional()
  @IsString()
  status?: string;
}

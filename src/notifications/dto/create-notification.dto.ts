import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateNotificationDto {
  @ApiProperty({ example: 'Booking confirmed for Vendor XYZ at 2 PM' })
  @IsString()
  @IsNotEmpty()
  message: string;

  @ApiProperty({ example: 'user' })
  @IsString()
  @IsNotEmpty()
  recipientRole: string; // 'user' | 'admin' etc.
}

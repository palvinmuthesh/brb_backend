import { IsArray, IsOptional, IsString } from 'class-validator';

export class CreateVendorDto {
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsString()
  readonly image?: string;

  @IsOptional()
  @IsArray()
  readonly tags?: string[];

  @IsArray()
  readonly services?: string[];

  @IsString()
  readonly location?: string;
}
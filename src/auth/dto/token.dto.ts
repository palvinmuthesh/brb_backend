import { ApiProperty } from '@nestjs/swagger';

export class TokenDto {
  @ApiProperty({ example: 'eyJhbGciOi...' })
  accessToken: string;

  @ApiProperty({ example: 'admin', enum: ['admin', 'user'] })
  role: string;

  @ApiProperty({ example: {} })
  user: {};
}

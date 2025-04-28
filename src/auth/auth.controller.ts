import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { TokenDto } from './dto/token.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Login and get token' })
  @ApiResponse({ status: 200, type: TokenDto })
  async login(@Body() dto: LoginDto): Promise<TokenDto> {
    return this.authService.login(dto);
  }

  @Post('register')
  @ApiOperation({ summary: 'Register' })
  @ApiResponse({ status: 200, type: TokenDto })
  async register(@Body() dto: LoginDto): Promise<TokenDto> {
    return this.authService.register(dto);
  }
}

import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './entities/user.entity';
import { LoginDto } from './dto/login.dto';
import { TokenDto } from './dto/token.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async login(dto: LoginDto): Promise<TokenDto> {
    const user = await this.userModel.findOne({ username: dto.username });

    if (!user || user.password !== dto.password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const accessToken = Buffer.from(`${user.username}:${user.role}`).toString('base64');

    return {
      accessToken,
      role: user.role,
      user: user
    };
  }

  async register(dto: LoginDto): Promise<TokenDto> {
    const existingUser = await this.userModel.findOne({ username: dto.username });

    if (existingUser) {
      throw new ConflictException('Username already taken');
    }

    const newUser = new this.userModel({
      username: dto.username,
      password: dto.password,
      role: 'user', // or dto.role if you allow dynamic roles
    });

    await newUser.save();

    const accessToken = Buffer.from(`${newUser.username}:${newUser.role}`).toString('base64');

    return {
      accessToken,
      role: newUser.role,
      user: newUser
    };
  }

  decodeToken(token: string): { username: string; role: string } {
    try {
      const [username, role] = Buffer.from(token, 'base64').toString().split(':');
      return { username, role };
    } catch {
      throw new UnauthorizedException('Invalid token');
    }
  }
}

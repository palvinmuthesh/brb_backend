import { Injectable } from '@nestjs/common';
import { HealthStatusDto } from './dto/health-status.dto';

@Injectable()
export class HealthService {
  getHealth(): HealthStatusDto {
    return { status: 'ok' };
  }
}

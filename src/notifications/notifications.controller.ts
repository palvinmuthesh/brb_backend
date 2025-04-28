import { Body, Controller, Get, Post } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Notification } from './entities/notification.entity';

@ApiTags('Notifications')
@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  @ApiOperation({ summary: 'Send a notification (mocked)' })
  create(@Body() dto: CreateNotificationDto): Notification {
    return this.notificationsService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all notifications (mocked)' })
  findAll(): Notification[] {
    return this.notificationsService.findAll();
  }
}

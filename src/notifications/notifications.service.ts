import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { Notification } from './entities/notification.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class NotificationsService {
  private notifications: Notification[] = [];

  create(dto: CreateNotificationDto): Notification {
    const notification: Notification = {
      id: uuidv4(),
      message: dto.message,
      recipientRole: dto.recipientRole,
      timestamp: new Date(),
    };

    this.notifications.push(notification);
    console.log(`[NOTIFICATION] Sent to ${dto.recipientRole}: ${dto.message}`);
    return notification;
  }

  findAll(): Notification[] {
    return this.notifications;
  }
}

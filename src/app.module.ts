import 'dotenv/config'
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

// Core modules
import { AuthModule } from './auth/auth.module';
import { HealthModule } from './health/health.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ServiceModule } from './service/service.module';
import { BookingModule } from './booking/booking.module';
import { ReportingModule } from './reporting/reporting.module';
import { VendorsModule } from './vendors/vendors.module';
import { LocationsModule } from './locations/locations.module';

// Load `.env` globally and initialize MongoDB connection
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env', }),

    // MongoDB connection (use ! to assert it's a string, since you've configured .env)
    MongooseModule.forRoot(process.env.MONGODB_URI!),

    // Feature Modules
    AuthModule,
    HealthModule,
    NotificationsModule,
    ServiceModule,
    BookingModule,
    ReportingModule,
    VendorsModule,
    LocationsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

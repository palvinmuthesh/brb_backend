import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Booking extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  vendorId: string;

  @Prop({ required: true })
  serviceId: string;

  @Prop({ required: true })
  date: string; // e.g. "2025-04-23"

  @Prop({ required: true })
  timeSlot: string; // e.g. "10:00 AM - 10:30 AM"

  @Prop({ default: 'confirmed' })
  status: string;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);

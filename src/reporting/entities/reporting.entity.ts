import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Reporting extends Document {
  @Prop({ required: true })
  bookingId: string;

  @Prop({ required: true })
  reportType: string; // e.g., "cancellation", "issue", "feedback"

  @Prop()
  details: string;

  @Prop({ default: 'pending' })
  status: string; // e.g., "pending", "resolved"
}

export const ReportingSchema = SchemaFactory.createForClass(Reporting);

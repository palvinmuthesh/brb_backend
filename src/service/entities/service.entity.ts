import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Service extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  duration: string; // e.g. "30 mins"

  @Prop()
  vendorId: string;
}

export const ServiceSchema = SchemaFactory.createForClass(Service);

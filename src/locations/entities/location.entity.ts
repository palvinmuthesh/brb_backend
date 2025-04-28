import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Location extends Document {
  @Prop({ required: true, unique: true })
  city: string;

  @Prop({ default: 'active' }) // optional status
  status: string;
}

export const LocationSchema = SchemaFactory.createForClass(Location);

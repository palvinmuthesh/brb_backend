import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VendorDocument = Vendor & Document;

@Schema({ timestamps: true })
export class Vendor {
  @Prop({ required: true })
  name: string;

  @Prop()
  image: string;

  @Prop([String])
  tags: string[];

  @Prop([String])
  services: string[];

  @Prop()
  location: string;
}

export const VendorSchema = SchemaFactory.createForClass(Vendor);

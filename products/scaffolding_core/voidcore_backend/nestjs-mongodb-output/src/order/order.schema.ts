import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Order extends Document {
  @Prop({ required: true })
  total: number;
  @Prop({ required: false })
  status: string;
  @Prop({ required: false })
  userId: Types.ObjectId;: any
}

export const OrderSchema = SchemaFactory.createForClass(Order);
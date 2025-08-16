import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class __PascalResource__ extends Document {
__fields__: any
}

export const __PascalResource__Schema = SchemaFactory.createForClass(__PascalResource__);
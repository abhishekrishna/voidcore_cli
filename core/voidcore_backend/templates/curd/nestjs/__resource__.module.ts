import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { __PascalResource__Controller } from './__resource__controller.template';
import { __PascalResource__Service } from './__resource__service.template';
import { __PascalResource__Schema } from './__resource__schema.template';


@Module({
  imports: [MongooseModule.forFeature([{ name: '__PascalResource__', schema: __PascalResource__Schema }])],
  controllers: [__PascalResource__Controller],
  providers: [__PascalResource__Service],
})
export class __PascalResource__Module {}
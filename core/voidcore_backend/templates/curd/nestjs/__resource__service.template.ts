import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { __PascalResource__ } from './__resource__schema.template';


@Injectable()
export class __PascalResource__Service {
  constructor(
    @InjectModel('__PascalResource__') private readonly model: Model<__PascalResource__>
  ) {}

  create(data: __PascalResource__) {
    return this.model.create(data);
  }

  findAll() {
    return this.model.find().exec();
  }

  findOne(id: string) {
    return this.model.findById(id).exec();
  }

  update(id: string, data: Partial<__PascalResource__>) {
    return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  remove(id: string) {
    return this.model.findByIdAndDelete(id).exec();
  }
}
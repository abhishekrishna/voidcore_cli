import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { __PascalResource__Service } from './__resource__service.template';
import { __PascalResource__ } from './__resource__schema.template';


@Controller('__resource__')
export class __PascalResource__Controller {
  constructor(private readonly service: __PascalResource__Service) {}

  @Post()
  create(@Body() data: __PascalResource__) {
    return this.service.create(data);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<__PascalResource__>) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
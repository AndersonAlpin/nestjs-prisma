import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { BookDto } from './book.dto';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async create(@Body() data: BookDto) {
    return await this.bookService.create(data);
  }

  @Get()
  async findAll() {
    return await this.bookService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.bookService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: BookDto) {
    return await this.bookService.update(id, data);
  }

  @HttpCode(204)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.bookService.delete(id);
  }
}

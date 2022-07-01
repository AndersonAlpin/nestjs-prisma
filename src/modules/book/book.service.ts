import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from './../../database/prisma.service';

import { BookDto } from './book.dto';

@Injectable()
export class BookService {
  constructor(private prismaService: PrismaService) {}

  async create(data: BookDto) {
    const book = await this.prismaService.book.findFirst({
      where: {
        bar_code: data.bar_code,
      },
    });

    if (book) throw new ConflictException('Book already exists');

    return await this.prismaService.book.create({ data });
  }

  async findAll() {
    return await this.prismaService.book.findMany();
  }

  async findOne(id: string) {
    const book = await this.prismaService.book.findUnique({ where: { id } });

    if (!book) throw new NotFoundException('Book does not exist');

    return book;
  }

  async update(id: string, data: BookDto) {
    const book = await this.prismaService.book.findUnique({ where: { id } });

    if (!book) throw new NotFoundException('Book does not exist');

    return await this.prismaService.book.update({
      data,
      where: { id },
    });
  }

  async delete(id: string) {
    const book = await this.prismaService.book.findUnique({ where: { id } });

    if (!book) throw new NotFoundException('Book does not exist');

    return await this.prismaService.book.delete({ where: { id } });
  }
}

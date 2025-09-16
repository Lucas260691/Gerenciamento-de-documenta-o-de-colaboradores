import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateDocumentTypeDto } from './dto/create-document-type.dto';

@Injectable()
export class DocumentTypesService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateDocumentTypeDto) {
    if (!data.name?.trim()) {
      throw new BadRequestException('Name is required');
    }

    return await this.prisma.documentType.create({
      data,
    });
  }

  async findAll() {
    return await this.prisma.documentType.findMany();
  }

  async findOne(id: string) {
    const type = await this.prisma.documentType.findUnique({ where: { id } });
    if (!type) throw new NotFoundException('DocumentType not found');
    return type;
  }

  async update(id: string, data: CreateDocumentTypeDto) {
    return await this.prisma.documentType.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return await this.prisma.documentType.delete({ where: { id } });
  }
}

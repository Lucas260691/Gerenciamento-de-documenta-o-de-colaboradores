import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { LinkDocumentsDto } from './dto/link-documents.dto';
import { UploadDocumentDto } from './dto/upload-document.dto';

@Injectable()
export class EmployeeDocumentsService {
  constructor(private prisma: PrismaService) {}

  async linkDocuments(dto: LinkDocumentsDto) {
    if (!dto.employeeId?.trim()) {
      throw new BadRequestException('EmployeeId is required');
    }
    if (!dto.documentTypeIds?.length) {
      throw new BadRequestException('At least one documentTypeId is required');
    }

    const employee = await this.prisma.employee.findUnique({
      where: { id: dto.employeeId },
    });
    if (!employee) throw new NotFoundException('Employee not found');

    // evita duplicados
    const uniqueIds = [...new Set(dto.documentTypeIds)];

    const docs = await Promise.all(
      uniqueIds.map(async (docTypeId) =>
        this.prisma.employeeDocument.create({
          data: {
            employeeId: dto.employeeId,
            documentTypeId: docTypeId,
            status: 'PENDING',
          },
        }),
      ),
    );

    return docs;
  }

  async unlinkDocuments(dto: LinkDocumentsDto) {
    if (!dto.employeeId?.trim()) {
      throw new BadRequestException('EmployeeId is required');
    }
    if (!dto.documentTypeIds?.length) {
      throw new BadRequestException('At least one documentTypeId is required');
    }

    const employee = await this.prisma.employee.findUnique({
      where: { id: dto.employeeId },
    });
    if (!employee) throw new NotFoundException('Employee not found');

    await this.prisma.employeeDocument.deleteMany({
      where: {
        employeeId: dto.employeeId,
        documentTypeId: { in: dto.documentTypeIds },
      },
    });

    return { message: 'Documents unlinked successfully' };
  }

  async uploadDocument(
    employeeId: string,
    documentTypeId: string,
    dto: UploadDocumentDto,
  ) {
    if (!employeeId?.trim() || !documentTypeId?.trim()) {
      throw new BadRequestException(
        'EmployeeId and DocumentTypeId are required',
      );
    }
    if (!dto.fileName?.trim()) {
      throw new BadRequestException('File name is required');
    }

    const document = await this.prisma.employeeDocument.findFirst({
      where: { employeeId, documentTypeId },
    });

    if (!document) {
      throw new NotFoundException('Document relation not found');
    }

    return await this.prisma.employeeDocument.update({
      where: { id: document.id },
      data: {
        fileName: dto.fileName,
        status: 'SENT',
      },
    });
  }

  async getStatus(employeeId: string) {
    if (!employeeId?.trim()) {
      throw new BadRequestException('EmployeeId is required');
    }

    const employee = await this.prisma.employee.findUnique({
      where: { id: employeeId },
      include: { documents: { include: { documentType: true } } },
    });

    if (!employee) throw new NotFoundException('Employee not found');

    if (!employee.documents || employee.documents.length === 0) {
      throw new BadRequestException('No document types available to link');
    }

    return {
      employeeId: employee.id,
      name: employee.name,
      documents: employee.documents.map((d) => ({
        type: d.documentType.name,
        status: d.status,
        fileName: d.fileName,
      })),
    };
  }

  async getPendingDocuments(
    employeeId?: string,
    documentTypeId?: string,
    skip = 0,
    take = 10,
  ) {
    if (skip < 0 || take <= 0) {
      throw new BadRequestException('Invalid pagination parameters');
    }

    return this.prisma.employeeDocument.findMany({
      where: {
        status: 'PENDING',
        ...(employeeId ? { employeeId } : {}),
        ...(documentTypeId ? { documentTypeId } : {}),
      },
      skip,
      take,
      include: { employee: true, documentType: true },
    });
  }
}

import { Controller, Post, Body, Param, Get, Query } from '@nestjs/common';
import { EmployeeDocumentsService } from './employee-documents.service';
import type { LinkDocumentsDto } from './dto/link-documents.dto';
import type { UploadDocumentDto } from './dto/upload-document.dto';

@Controller('employee-documents')
export class EmployeeDocumentsController {
  constructor(private readonly service: EmployeeDocumentsService) {}

  @Post('link')
  link(@Body() dto: LinkDocumentsDto) {
    return this.service.linkDocuments(dto);
  }

  @Post('unlink')
  unlink(@Body() dto: LinkDocumentsDto) {
    return this.service.unlinkDocuments(dto);
  }

  @Post('upload')
  upload(@Body() dto: UploadDocumentDto) {
    return this.service.uploadDocument(dto.employeeId, dto.documentTypeId, dto);
  }
  @Get('status/:employeeId')
  status(@Param('employeeId') employeeId: string) {
    return this.service.getStatus(employeeId);
  }

  @Get('pending')
  getPending(
    @Query('employeeId') employeeId?: string,
    @Query('documentTypeId') documentTypeId?: string,
    @Query('skip') skip = '0',
    @Query('take') take = '10',
  ) {
    return this.service.getPendingDocuments(
      employeeId,
      documentTypeId,
      parseInt(skip),
      parseInt(take),
    );
  }
}

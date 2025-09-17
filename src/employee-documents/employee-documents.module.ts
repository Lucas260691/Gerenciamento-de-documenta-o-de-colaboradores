import { Module } from '@nestjs/common';
import { EmployeeDocumentsService } from './employee-documents.service';
import { EmployeeDocumentsController } from './employee-documents.controller';
import { PrismaModule } from '../database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EmployeeDocumentsController],
  providers: [EmployeeDocumentsService],
})
export class EmployeeDocumentsModule {}

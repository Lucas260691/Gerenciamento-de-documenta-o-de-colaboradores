import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { EmployeesModule } from './employees/employees.module';
import { DocumentTypesModule } from './document-types/document-types.module';
import { EmployeeDocumentsModule } from './employee-documents/employee-documents.module';

@Module({
  imports: [
    PrismaModule,
    EmployeesModule,
    DocumentTypesModule,
    EmployeeDocumentsModule,
  ],
})
export class AppModule {}

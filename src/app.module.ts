import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { EmployeesModule } from './employees/employees.module';
import { DocumentTypesModule } from './document-types/document-types.module';

@Module({
  imports: [PrismaModule, EmployeesModule, DocumentTypesModule],
})
export class AppModule {}

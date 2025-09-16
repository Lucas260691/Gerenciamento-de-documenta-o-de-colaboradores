import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [PrismaModule, EmployeesModule],
})
export class AppModule {}

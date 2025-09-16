import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeesService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateEmployeeDto) {
    if (!data.name?.trim()) {
      throw new BadRequestException('Name is required');
    }
    if (!data.cpf?.match(/^\d{11}$/)) {
      throw new BadRequestException('CPF must have 11 digits');
    }
    if (isNaN(Date.parse(data.hiredAt))) {
      throw new BadRequestException('Invalid hiredAt date');
    }

    return this.prisma.employee.create({
      data: {
        ...data,
        hiredAt: new Date(data.hiredAt),
      },
    });
  }

  async findAll() {
    return this.prisma.employee.findMany();
  }

  async findOne(id: string) {
    const employee = await this.prisma.employee.findUnique({ where: { id } });
    if (!employee) throw new NotFoundException('Employee not found');
    return employee;
  }

  async update(id: string, data: UpdateEmployeeDto) {
    return this.prisma.employee.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return this.prisma.employee.delete({ where: { id } });
  }
}

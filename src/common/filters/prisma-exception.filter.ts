import {
  ExceptionFilter,
  Catch,
  BadRequestException,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError) {
    const meta = exception.meta as Record<string, any>;

    switch (exception.code) {
      case 'P2000':
        throw new BadRequestException(
          `Value too long for field: ${meta?.target}`,
        );

      case 'P2002':
        throw new BadRequestException(
          `Duplicate value for unique field: ${meta?.target}`,
        );

      case 'P2003':
        throw new BadRequestException(
          `Invalid reference in field: ${meta?.field_name}`,
        );

      case 'P2025':
        throw new NotFoundException(`Record not found`);

      default:
        throw new InternalServerErrorException(
          `Unexpected database error: ${exception.message}`,
        );
    }
  }
}

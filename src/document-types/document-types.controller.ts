import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { DocumentTypesService } from './document-types.service';
import * as createDocumentTypeDto from './dto/create-document-type.dto';

@Controller('document-types')
export class DocumentTypesController {
  constructor(private readonly service: DocumentTypesService) {}

  @Post()
  create(@Body() dto: createDocumentTypeDto.CreateDocumentTypeDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() dto: createDocumentTypeDto.CreateDocumentTypeDto,
  ) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GetDesignTokenService } from './get-design-token.service';
import { CreateGetDesignTokenDto } from './dto/create-get-design-token.dto';
import { UpdateGetDesignTokenDto } from './dto/update-get-design-token.dto';

@Controller('get-design-token')
export class GetDesignTokenController {
  constructor(private readonly getDesignTokenService: GetDesignTokenService) {}

  @Post()
  create(@Body() createGetDesignTokenDto: CreateGetDesignTokenDto) {
    return this.getDesignTokenService.create(createGetDesignTokenDto);
  }

  @Get()
  findAll() {
    return this.getDesignTokenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.getDesignTokenService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGetDesignTokenDto: UpdateGetDesignTokenDto) {
    return this.getDesignTokenService.update(+id, updateGetDesignTokenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.getDesignTokenService.remove(+id);
  }
}

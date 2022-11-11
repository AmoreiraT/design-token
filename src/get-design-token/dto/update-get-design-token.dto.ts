import { PartialType } from '@nestjs/swagger';
import { CreateGetDesignTokenDto } from './create-get-design-token.dto';

export class UpdateGetDesignTokenDto extends PartialType(CreateGetDesignTokenDto) {}

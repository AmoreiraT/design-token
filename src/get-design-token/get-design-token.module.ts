import { Module } from '@nestjs/common';
import { GetDesignTokenService } from './get-design-token.service';
import { GetDesignTokenController } from './get-design-token.controller';

@Module({
  controllers: [GetDesignTokenController],
  providers: [GetDesignTokenService]
})
export class GetDesignTokenModule {}

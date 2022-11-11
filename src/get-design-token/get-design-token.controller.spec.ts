import { Test, TestingModule } from '@nestjs/testing';
import { GetDesignTokenController } from './get-design-token.controller';
import { GetDesignTokenService } from './get-design-token.service';

describe('GetDesignTokenController', () => {
  let controller: GetDesignTokenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetDesignTokenController],
      providers: [GetDesignTokenService],
    }).compile();

    controller = module.get<GetDesignTokenController>(GetDesignTokenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

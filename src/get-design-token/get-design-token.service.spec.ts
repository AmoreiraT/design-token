import { Test, TestingModule } from '@nestjs/testing';
import { GetDesignTokenService } from './get-design-token.service';

describe('GetDesignTokenService', () => {
  let service: GetDesignTokenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetDesignTokenService],
    }).compile();

    service = module.get<GetDesignTokenService>(GetDesignTokenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

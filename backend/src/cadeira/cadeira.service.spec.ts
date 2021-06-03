import { Test, TestingModule } from '@nestjs/testing';
import { CadeiraService } from './cadeira.service';

describe('CadeiraService', () => {
  let service: CadeiraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CadeiraService],
    }).compile();

    service = module.get<CadeiraService>(CadeiraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { CadeiraController } from './cadeira.controller';

describe('CadeiraController', () => {
  let controller: CadeiraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CadeiraController],
    }).compile();

    controller = module.get<CadeiraController>(CadeiraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

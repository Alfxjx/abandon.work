import { Test, TestingModule } from '@nestjs/testing';
import { JuheService } from './juhe.service';

describe('JuheService', () => {
  let service: JuheService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JuheService],
    }).compile();

    service = module.get<JuheService>(JuheService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

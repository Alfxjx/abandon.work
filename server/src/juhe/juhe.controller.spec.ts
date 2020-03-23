import { Test, TestingModule } from '@nestjs/testing';
import { JuheController } from './juhe.controller';

describe('Juhe Controller', () => {
  let controller: JuheController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JuheController],
    }).compile();

    controller = module.get<JuheController>(JuheController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

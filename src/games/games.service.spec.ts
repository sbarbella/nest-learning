import { Test, TestingModule } from '@nestjs/testing';
import { GamesService } from './games.service';
import { HttpModule } from '@nestjs/axios';

describe('GamesService', () => {
  let service: GamesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GamesService],
      imports: [HttpModule],
    }).compile();

    service = module.get<GamesService>(GamesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

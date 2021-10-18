import { Module } from '@nestjs/common';
import { GamesModule } from './games/games.module';
import { ConfigModule } from '@nestjs/config';

ConfigModule.forRoot();

@Module({
  imports: [ 
      GamesModule, 
      ConfigModule.forRoot({ envFilePath: `${process.env.NODE_ENV}.env` }),
    ],
})
export class AppModule {}

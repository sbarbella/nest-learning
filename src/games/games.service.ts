import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { GamesDtos } from './dto/games.dto';

@Injectable()
export class GamesService {
  constructor(private httpService: HttpService) {}
  private readonly logger = new Logger(GamesService.name);

  async findAll(): Promise<GamesDtos> {
    //Una forma de hacer destructuring a un nested object
    const response = await this.httpService.axiosRef.get(process.env.URL_GAMES);
    const {
      data: { [0]: responseData },
    } = response;

    /** Otra forma seria
        const { data } = await this.httpService.axiosRef.get(process.env.URL_GAMES);
        [responseData] = data; 
        Esto es posible por que data contiene un [] 
    **/

    const {
      gameID,
      steamAppID,
      cheapestDealID,
      external: externalName, //renombrando una variable a la cual se le esta aplicando destructuring
      internalName,
      thumb,
    } = responseData;

    const gamesDto: GamesDtos = {
      gameID,
      steamAppID,
      cheapestDealID,
      externalName,
      internalName,
      thumb,
    };

    return gamesDto;
  }
}

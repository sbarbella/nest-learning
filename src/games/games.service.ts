import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { GamesDtos } from './dto/games.dto';

@Injectable()
export class GamesService {

    constructor(private httpService: HttpService) {}
    private readonly logger = new Logger(GamesService.name);

    async findAll(): Promise<GamesDtos> {

        const { data } = await this.httpService.axiosRef.get(process.env.URL_GAMES); 
        const  [ responseData ] = data
        
        const { gameID, 
            steamAppID, 
            cheapestDealID, 
            external, 
            internalName, 
            thumb } = responseData ;

        const gamesDto : GamesDtos = { 
            gameID,
            steamAppID,
            cheapestDealID,
            external,
            internalName,
            thumb
        }

        return gamesDto;
    }
}

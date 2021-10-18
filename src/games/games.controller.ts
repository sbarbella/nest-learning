import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { GamesService } from './games.service';
import { FastifyReply } from 'fastify';

@Controller('/games')
export class GamesController {

    constructor(private readonly gameService: GamesService) {}

    @Get('/find')
        async findAll(@Res() reply: FastifyReply) {
          const responseData = await this.gameService.findAll();
          reply.status(HttpStatus.OK).send(responseData);
        }
}
import { Module } from '@nestjs/common';
import { BotController } from './bot.controller';
import { BotService } from './bot.service';
import { ImovelDTO } from './DTO/bot.imovel.dto';

@Module({
    imports:[],
    controllers:[BotController],
    providers:[BotService,ImovelDTO]
})
export class BotModule {}

import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Cadeira } from './cadeira.entity';
import { CadeiraService } from './cadeira.service';

@Controller('cadeira')
export class CadeiraController {
    constructor(private readonly cadeiraService: CadeiraService){}

    @Get()
    verCadeiras(): Promise<any> {
        return this.cadeiraService.pegarCadeiras();
    }
    @Get(':id')
    verCadeira(@Param('id') id: number) {
        return this.cadeiraService.encontrarCadeira(id)
    }
    @Post()
    async criarCadeira(@Body() cadeira: Cadeira ) : Promise<any> {
        return this.cadeiraService.criarCadeira(cadeira)
    }
    @Delete(':id')
    async deletarCadeira(@Param('id') id: number) {
        return this.cadeiraService.removerCadeira(id);
    }
    @Patch()
    async atualizarCadeira(@Body() cadeira: Cadeira) {
        return this.cadeiraService.atualizarCadeira(cadeira);
    }
}

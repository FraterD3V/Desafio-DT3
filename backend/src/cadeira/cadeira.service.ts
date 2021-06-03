import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cadeira } from './cadeira.entity';

@Injectable()
export class CadeiraService {
    constructor(
        @InjectRepository(Cadeira)
        private cadeiraRepository: Repository<Cadeira>,
    ) { }

    pegarCadeiras(): Promise<Cadeira[]> {
        return this.cadeiraRepository.find();
    }

    encontrarCadeira(id: number): Promise<Cadeira> {
        return this.cadeiraRepository.findOne(id);
    }

    async criarCadeira(cadeira: Cadeira): Promise<any> {
        await this.cadeiraRepository.save(cadeira);
    }

    async removerCadeira(id: number): Promise<void> {
        await this.cadeiraRepository.delete(id);
    }
    
    async atualizarCadeira(cadeira: Cadeira) {
        const cadeira_db = await this.cadeiraRepository.findOne(cadeira.id);
        if(!cadeira_db) {
            throw new NotFoundException("Cadeira não encontrada. Verifique o ID!");
        }
        await this.cadeiraRepository.update({id: cadeira_db.id}, {
            modelo: cadeira.modelo,
            descricao: cadeira.descricao,
            preco: cadeira.preco,
            urlImg: cadeira.urlImg,
            disponivel: cadeira.disponivel
        })
        return await cadeira;
    }
}
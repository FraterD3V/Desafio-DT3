import { Repository } from 'typeorm';
import { Cadeira } from './cadeira.entity';
export declare class CadeiraService {
    private cadeiraRepository;
    constructor(cadeiraRepository: Repository<Cadeira>);
    pegarCadeiras(): Promise<Cadeira[]>;
    encontrarCadeira(id: number): Promise<Cadeira>;
    criarCadeira(cadeira: Cadeira): Promise<any>;
    removerCadeira(id: number): Promise<void>;
    atualizarCadeira(cadeira: Cadeira): Promise<Cadeira>;
}

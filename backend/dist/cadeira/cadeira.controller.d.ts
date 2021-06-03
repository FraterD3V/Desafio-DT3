import { Cadeira } from './cadeira.entity';
import { CadeiraService } from './cadeira.service';
export declare class CadeiraController {
    private readonly cadeiraService;
    constructor(cadeiraService: CadeiraService);
    verCadeiras(): Promise<any>;
    verCadeira(id: number): Promise<Cadeira>;
    criarCadeira(cadeira: Cadeira): Promise<any>;
    deletarCadeira(id: number): Promise<void>;
    atualizarCadeira(cadeira: Cadeira): Promise<Cadeira>;
}

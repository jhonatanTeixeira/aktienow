import {Usuario} from './usuario';
import {Livro} from './livro';

export class Avaliacao {
    id: number;

    nota: number;

    estadoConservacao: string;

    observacao: string;

    livro: Livro;

    usuario: Usuario;
}

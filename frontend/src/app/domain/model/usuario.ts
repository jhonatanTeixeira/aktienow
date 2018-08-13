import {Avaliacao} from './avaliacao';

export class Usuario {
    id: number;

    nome: string;

    avaliacoes: Avaliacao[];

    permissions: string[];
}


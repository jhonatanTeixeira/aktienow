import {Avaliacao} from './avaliacao';

export class Livro {
    id: number;

    nome: string;

    avaliacoes: Avaliacao[];

    estatistica: {media: number, total: number} = {media: 0, total: 0};
}

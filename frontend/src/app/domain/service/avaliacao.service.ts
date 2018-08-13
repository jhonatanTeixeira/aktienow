import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Avaliacao} from '../model/avaliacao';

@Injectable()
export class AvaliacaoService {
    constructor(
        private httpClient: HttpClient
    ) {}

    postAvaliacao(avaliacao: Avaliacao) {
        return this.httpClient.post('http://localhost:3000/avaliacoes', avaliacao);
    }

    getAvaliacoes(page: number, limit: number) {
        return this.httpClient
            .get('http://localhost:3000/avaliacoes', {params: {page: page.toString(), limit: limit.toString()}});
    }
}

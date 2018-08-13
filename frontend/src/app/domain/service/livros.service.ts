import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Livro} from '../model/livro';
import {Observable} from 'rxjs';
// import 'rxjs/add/operator/map';
// import {map} from 'rxjs/internal/operators';
import { map } from 'rxjs/operators';

@Injectable()
export class LivrosService {
    constructor(
        private httpClient: HttpClient
    ) {}

     buscaLivros(page: number = null, showTotals: boolean = false) {
        return this.httpClient.get('http://localhost:3000/livros').pipe(
            map((response: {totals: number, results: Livro[]}) => {
                if (!showTotals) {
                    return response.results;
                }

                return response;
            })
        );
     }

     buscaEstatisticaLivro(livroId: number) {
         return this.httpClient
             .get<{media: number, total: number}>('http://localhost:3000/livros/' + livroId + '/estatisticas');
     }
}

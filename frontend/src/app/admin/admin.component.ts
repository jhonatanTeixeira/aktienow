import {Component, OnInit} from '@angular/core';
import {LivrosService} from '../domain/service/livros.service';
import {AvaliacaoService} from '../domain/service/avaliacao.service';
import {Livro} from '../domain/model/livro';
import {map} from 'rxjs/operators';
import {Avaliacao} from '../domain/model/avaliacao';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    livros: Livro[];

    avaliacoes: Avaliacao[];

    constructor(
        public livrosService: LivrosService,
        public avaliacaoService: AvaliacaoService
    ) {}

    ngOnInit() {
        this.livrosService.buscaLivros()
            .subscribe((livros: Livro[]) => {
                livros.map(livro => {
                    livro.estatistica = {media: 0, total: 0};

                    this.livrosService.buscaEstatisticaLivro(livro.id).subscribe(estatistica => {
                        if (estatistica) {
                            livro.estatistica = estatistica;
                        }
                    });
                });

                this.livros = livros;
            });

        this.avaliacaoService.getAvaliacoes(1, 30)
            .subscribe((response: {total: number, avaliacoes: Avaliacao[]}) => {
                this.avaliacoes = response.avaliacoes;
            })
        ;
    }

}

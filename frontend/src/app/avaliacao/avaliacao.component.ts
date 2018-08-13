import {Component, OnInit} from '@angular/core';
import {AvaliacaoService} from '../domain/service/avaliacao.service';
import {Avaliacao} from '../domain/model/avaliacao';
import {Router} from '@angular/router';
import {LivrosService} from '../domain/service/livros.service';
import {Livro} from '../domain/model/livro';

@Component({
    selector: 'app-avaliacao',
    templateUrl: './avaliacao.component.html',
    styleUrls: ['./avaliacao.component.css']
})
export class AvaliacaoComponent implements OnInit {

    avaliacao = new Avaliacao();

    livros: Livro[];

    estadosConservacao = ['Otimo', 'Bom', 'Ruim', 'Regular'];

    constructor(
        public avalicaoService: AvaliacaoService,
        public livosService: LivrosService,
        public router: Router
    ) {}

    ngOnInit() {
        this.livosService.buscaLivros().subscribe((response: Livro[]) => {
            this.livros = response;
        });
    }

    save() {
        console.log(this.avaliacao);
        this.avalicaoService.postAvaliacao(this.avaliacao)
            .subscribe(response => {
                if (confirm('Gostaria de classificar outro livro?')) {
                    this.avaliacao = new Avaliacao();
                    return;
                }

                localStorage.removeItem('access_token');
                this.router.navigate(['/login']);
            })
        ;
    }
}

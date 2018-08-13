import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AvaliacaoService} from './service/avaliacao.service';
import {LivrosService} from './service/livros.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        AvaliacaoService,
        LivrosService
    ],
    declarations: []
})
export class DomainModule {
}

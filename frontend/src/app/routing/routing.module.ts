import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {AvaliacaoComponent} from '../avaliacao/avaliacao.component';
import {LoggedGuard} from '../logged.guard';
import {AdminGuard} from '../admin.guard';
import {AdminComponent} from '../admin/admin.component';
import {AdminLoginComponent} from '../admin-login/admin-login.component';

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'avaliacao',
        component: AvaliacaoComponent,
        canActivate: [LoggedGuard]
    },
    {
        path: 'admin/login',
        component: AdminLoginComponent
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AdminGuard]
    },
    {
        path: '**',
        redirectTo: 'avaliacao'
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: false }
        )
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class RoutingModule {
}

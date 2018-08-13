import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RoutingModule} from './routing/routing.module';
import {LoginComponent} from './login/login.component';
import {JwtModule} from '@auth0/angular-jwt';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import {DomainModule} from './domain/domain.module';
import {LoggedGuard} from './logged.guard';
import { AdminComponent } from './admin/admin.component';
import {AdminGuard} from './admin.guard';
import { AdminLoginComponent } from './admin-login/admin-login.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        AvaliacaoComponent,
        AdminComponent,
        AdminLoginComponent
    ],
    imports: [
        BrowserModule,
        RoutingModule,
        HttpClientModule,
        FormsModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: () => localStorage.getItem('access_token'),
                whitelistedDomains: ['localhost:3000'],
                blacklistedRoutes: ['localhost:3000/login'],
            }
        }),
        DomainModule
    ],
    providers: [LoggedGuard, AdminGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}

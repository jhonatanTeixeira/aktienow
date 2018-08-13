import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
    userName: string;
    pass: string;

    constructor(
        public httpClient: HttpClient,
        public router: Router
    ) { }

    login() {
        this.httpClient.post('http://localhost:3000/admin/login', {nome: this.userName, senha: this.pass})
            .subscribe((response: {token: string}) => {
                localStorage.setItem('access_token', response.token);
                this.router.navigate(['/admin']);
            })
        ;
    }
}

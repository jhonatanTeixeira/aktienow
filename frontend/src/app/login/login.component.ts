import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    userName: string;

    constructor(
        public httpClient: HttpClient,
        public router: Router
    ) { }

    login() {
        this.httpClient.post('http://localhost:3000/login', {nome: this.userName})
            .subscribe((response: {token: string}) => {
                localStorage.setItem('access_token', response.token);
                this.router.navigate(['/']);
            })
        ;
    }
}

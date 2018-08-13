import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import * as jwt_decode from 'jwt-decode';
import {Usuario} from './domain/model/usuario';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {

    constructor(
        private router: Router
    ) {}

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const token = localStorage.getItem('access_token');

        const user: Usuario = jwt_decode(token);

        if (user.permissions.some(item => item === 'admin')) {
            return true;
        }

        this.router.navigate(['/admin/login']);
    }
}

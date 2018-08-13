import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoggedGuard implements CanActivate {

    constructor(
        private router: Router
    ) {}

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        const hasToken = localStorage.getItem('access_token') != null;

        if (!hasToken) {
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }
}

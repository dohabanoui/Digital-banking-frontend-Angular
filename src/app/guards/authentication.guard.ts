import { CanActivateFn } from '@angular/router';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree} from '@angular/router';

import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "../services/auth.service";
@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard {
  constructor(private authService: AuthService, private router : Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.isAuthenticated) {
      return true;
    } else {
      this.router.navigateByUrl("/login");
      return false;
    }
  }
}

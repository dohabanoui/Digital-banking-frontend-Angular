import { ActivatedRouteSnapshot, Router, RouterStateSnapshot,} from "@angular/router";
import {state} from "@angular/animations";
import {Injectable} from "@angular/core";
import {AuthService} from "../services/auth.service";
@Injectable({
  providedIn: 'root'
})
export class authorizationGuard{
  constructor(private router : Router,
              private authService : AuthService) {

  }

  canActivate( route : ActivatedRouteSnapshot,  state: RouterStateSnapshot) {
    if(this.authService.roles.includes("ADMIN")){
      return true;
    }else {
      this.router.navigateByUrl("/admin/notAuthorized");
      return false;
    }
  }

}

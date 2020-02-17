import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../AuthenticationService/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router){}
  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot){
     // check if the user is logged in
     if(localStorage.getItem('accessToken')){
         return true;
     }

     // not logged in so redirect to login page with the return url
     this.router.navigate(['/login']);
     return false;
  }

}
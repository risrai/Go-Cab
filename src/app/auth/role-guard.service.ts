import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';

import { AuthenticationService } from '../AuthenticationService/authentication.service';
@Injectable()
export class RoleGuardService implements CanActivate {
  constructor(public auth: AuthenticationService, public router: Router) {}
  canActivate(routes: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
  // const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem('accessToken');
    const helper = new JwtHelperService();
    const expectedRole = routes.data.roles;
    
    // decode the token to get its payload
    const tokenPayload = helper.decodeToken(token);
    console.log(tokenPayload.auth);
    if (tokenPayload.auth!==expectedRole) {
      // role not authorised so redirect to home page
      console.log(expectedRole);
      //this.router.navigate(['about']);
      return false;
  }
  else{
  
  // authorised so return true
  return true;
  }
}
}
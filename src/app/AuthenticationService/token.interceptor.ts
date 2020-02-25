import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthenticationService,private inj: Injector) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(request.url!=="http://localhost:8762/api/create"){
        const authReq = request.clone({
            headers: request.headers.set('Authorization', /* here you fetch your jwt */this.auth.getToken())
              .append('Access-Control-Allow-Origin', 'http://localhost:4200')
          }); 
}
    return next.handle(request);
  }
}
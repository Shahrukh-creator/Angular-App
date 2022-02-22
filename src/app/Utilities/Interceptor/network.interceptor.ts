import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators'
import { LoadingService } from '../../shared/Loading/loading.service';
import { AuthenticationService } from '../../shared/authentication/authentication.service';


@Injectable()
export class NetworkInterceptor implements HttpInterceptor {



  constructor(private http:HttpClient,private loader:LoadingService,private auth: AuthenticationService) {}


  intercept(
    request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loader.show();

    request = request.clone({
      setHeaders:{
        Authorization: `${this.auth.token}`,
      }
    })
    return next.handle(request).pipe(
      finalize(()=>{
        this.loader.hide();
        console.log("Loader runs");

      })
    )
  }
}

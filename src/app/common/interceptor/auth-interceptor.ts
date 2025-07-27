import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Constant} from "../../util/constant";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class AuthInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token =sessionStorage.getItem(Constant.ACCESS_TOKEN);
    console.log('Token:',sessionStorage.getItem(Constant.ACCESS_TOKEN));

    const clonedRequest =req.clone({
      setHeaders:{
        'Content-Type':'application/json',
        ...(token && { Authorization: `Bearer ${token}` }), // Only add Authorization if token exists
      }
    })
    return next.handle(clonedRequest);
  }
}

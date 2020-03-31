import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_URL } from 'src/config';

@Injectable()
export class BaseInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let apiReq = req.clone({ url: `${API_URL}${req.url}` });

    apiReq = apiReq.clone({ headers: apiReq.headers.set('Accept', 'application/json') });

    return next.handle(apiReq).pipe(
      catchError((error: HttpErrorResponse) => {
        const data = {
          reason: error && error.error ? error.error : '',
          status: error.status,
        };

        console.error(`INFO ERROR FOR REQUEST ${apiReq.url}: `, data);

        return throwError(error);
      })
    );
  }
}

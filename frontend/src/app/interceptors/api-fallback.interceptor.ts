import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable()
export class ApiFallbackInterceptor implements HttpInterceptor {
  private readonly localBaseUrl = 'http://127.0.0.1:8000/api';
  private readonly remoteBaseUrl = 'https://full-online-shop-angular-django-production.up.railway.app/api';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const localReq = this.cloneRequestWithBaseUrl(req, this.localBaseUrl);

    return next.handle(localReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 0 || error.status === 503) {
          console.error(`Error connecting to local URL: ${this.localBaseUrl}`, error);
          const remoteReq = this.cloneRequestWithBaseUrl(req, this.remoteBaseUrl);
          console.info(`Retrying request with remote URL: ${remoteReq.url}`);
          return next.handle(remoteReq).pipe(
            catchError((remoteError: HttpErrorResponse) => {
              console.error('Error in both URLs', remoteError);
              return throwError(() => new Error('Request failed after fallback'));
            })
          );
        }
        return throwError(() => error);
      })
    );
  }

  private cloneRequestWithBaseUrl(req: HttpRequest<any>, baseUrl: string): HttpRequest<any> {
    return req.clone({ url: `${baseUrl}/${req.url}` });
  }
}

import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiFallbackInterceptor implements HttpInterceptor {
  private readonly localBaseUrl = 'http://127.0.0.1:8000/api';
  private readonly remoteBaseUrl = 'https://full-online-shop-angular-django-production.up.railway.app/api';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to change the URL to the local base URL
    const localReq = this.cloneRequestWithBaseUrl(req, this.localBaseUrl);

    return next.handle(localReq).pipe(
      catchError((error: HttpErrorResponse) => {
        // Only handle the error if it's a connection error or a service unavailable error
        if (error.status === 0 || error.status === 503) {
          // Log error only if both local and remote requests fail
          console.info(`Error connecting to local URL: ${this.localBaseUrl}. Retrying with remote URL...`);
          
          // Clone the request to change the URL to the remote base URL
          const remoteReq = this.cloneRequestWithBaseUrl(req, this.remoteBaseUrl);
          return next.handle(remoteReq).pipe(
            catchError((remoteError: HttpErrorResponse) => {
              // Log only if the remote request fails
              console.error('Error connecting to remote URL:', remoteError);
              // Rethrow the error so that it can be handled by other parts of the application
              return throwError(() => new Error('Request failed after fallback'));
            })
          );
        }
        // For other errors, simply rethrow the error without additional logging
        return throwError(() => error);
      })
    );
  }

  // Helper function to clone the request with a different base URL
  private cloneRequestWithBaseUrl(req: HttpRequest<any>, baseUrl: string): HttpRequest<any> {
    return req.clone({ url: `${baseUrl}/${req.url}` });
  }
}

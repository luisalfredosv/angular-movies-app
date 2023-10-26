import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private API_TOKEN =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODUzNDg3OWE2MzBlZjZlMTIzZjlkZTFhZGRlZDRiYyIsInN1YiI6IjVmZGNiNWMzY2Y0OGExMDA0MTQ5NjVjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TcspRK-kpQRjXVh4Qz9UFHBsooddaEsTnJ4yYhdYHbU';

  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.API_TOKEN) {
      request = request.clone({
        setHeaders: {
          authorization: `Bearer ${this.API_TOKEN}`,
        },
        setParams: {
          language: 'es-ES',
        },
      });
    }

    return next.handle(request);
  }
}

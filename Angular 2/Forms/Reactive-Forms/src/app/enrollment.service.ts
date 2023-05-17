import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private url= 'http://localhost:3000/enroll';
  constructor(private _http: HttpClient) { }
  sent(data) {
    return this._http.post<any>(this.url, data).pipe(catchError(this.handleError));
  }
  handleError(err: HttpErrorResponse) {
    return throwError(err)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class   EnrollmentService {
  private url= 'http://localhost:3000/enroll';
  constructor(private _http: HttpClient) { }
  enroll(data: User): Observable<any> {
    // console.log(data,this.url)
    // const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post<any>(this.url, data).pipe(catchError(this.handleError));
  }
  handleError(err: HttpErrorResponse): Observable<any> {
    return throwError(err);
  }
}

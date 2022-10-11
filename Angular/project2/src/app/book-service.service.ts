import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { Book } from './book/Book';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  private url: string = "app/book/book-data"
  constructor(private http: HttpClient) { }
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url).pipe(
      tap((data: any) => console.log('Data Fetched:' + JSON.stringify(data))),
      catchError(this.errorHandler))
  }

  errorHandler(err: HttpErrorResponse): Observable<any> {
    console.log(err)
    return throwError(() => "soem")
  }
}

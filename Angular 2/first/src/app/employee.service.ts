import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { iEmployee } from './employee';
import { catchError, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = "./assets/data/employees.json";
  constructor(private http: HttpClient) { }
  getEmployees(): Observable<iEmployee[]> {
    return this.http.get<iEmployee[]>(this.url)
      .pipe(tap((data: any) => { console.log("Fetched Successfully"+JSON.stringify(data))}),catchError(this.errorHandler  ));
  }
  errorHandler(error: HttpErrorResponse) {
    console.log(error)
    return throwError(error.message || "Server Error");
  }
}

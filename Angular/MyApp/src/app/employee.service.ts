import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { employee } from './employee';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url:string="src/assets/data/employee.json"
  constructor(private http : HttpClient) { }
  getEmployees():Observable<employee[]>{
    return this.http.get<employee[]>(this._url)
  }
}

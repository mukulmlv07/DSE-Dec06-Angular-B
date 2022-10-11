import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employeeData:any=[]
  constructor(private employeeService:EmployeeService) {
   }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(data=>{console.log(data);this.employeeData=data})
  }

}

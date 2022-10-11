import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
// import { relative } from 'path';
@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  public selectedId: string | null | undefined 
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    let id=this.route.snapshot.paramMap.get('id')
    this.selectedId=id
    console.log(this.route.snapshot)
  }

  backTo(){
    let some=this.selectedId!='' ? this.selectedId : null
    this.router.navigate(['../',{id:this.selectedId},{relativeTo:this.route}])
    
  }

}

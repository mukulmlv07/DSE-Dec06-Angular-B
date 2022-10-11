import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  public selectedId:any
  public department=[
    {id:1,name:"cs"},
    {id:2,name:"it"},
    {id:3,name:"ec"},
    {id:4,name:"me"},

  ]
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.selectedId=params.get('id')
    })
    console.log('dsds',this.selectedId)
  }

  showDep(id:any){
    console.log(id)
    this.router.navigate([id],{relativeTo:this.route})
  }

}

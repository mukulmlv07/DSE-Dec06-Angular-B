import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public msg:string="mukul"
  public name=''
  public hasError=true;
  public isSpecial=true;
  cond=false
  @Input() public msgFromParent = ''
  @Output() public msgFromChild = new EventEmitter()
  public cls={
    "text-special":this.isSpecial,
    "text-danger":this.hasError,
    "text-success":!this.hasError

  }
  constructor() {
   
   }

  ngOnInit(): void {
   
  }
  logHandler(some:any,event:any){
    console.log(some,event)
  }
  some(){
    this.msgFromChild.emit("Message from child")
  }
}

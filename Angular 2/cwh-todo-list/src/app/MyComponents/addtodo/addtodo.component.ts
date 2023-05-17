import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {
  title: string
  desc: string
  @Output() addtodo: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active:true 
    }
    this.addtodo.emit(todo);
  }
}

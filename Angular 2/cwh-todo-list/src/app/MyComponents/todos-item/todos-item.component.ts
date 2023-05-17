import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';



@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css']
})
export class TodosItemComponent implements OnInit {
  @Input() todo:Todo
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() todocheckbox: EventEmitter<Todo> = new EventEmitter();
  constructor() {
    console.log("hello")
   }

  ngOnInit(): void {
  }
  onClick(todo:Todo) {
    this.deleteTodo.emit(todo)
    console.log("clcik")

  }
  onclickCheck(todo: Todo) {
    console.log(todo)
    this.todocheckbox.emit(todo);
   }
}

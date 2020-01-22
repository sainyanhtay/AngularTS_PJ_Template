import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ToDo } from '../../core/models/toDo'

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss', '../../common/common.scss']
})
export class ToDoComponent implements OnInit {

  toDo = new ToDo()

  @Input() toDoTitle: string

  @Output() addedToDo = new EventEmitter<ToDo>()


  constructor() {
    console.log('todo component > ')
  }

  ngOnInit() {
  }

  addTodo() {
    this.addedToDo.emit(this.toDo)
    console.log('this.todo > ', this.toDo)

    this.toDo = new ToDo()
  }



}

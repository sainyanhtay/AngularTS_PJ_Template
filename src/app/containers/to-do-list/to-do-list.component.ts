import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from '../../core/models/toDo'
import { TodoListService } from './to-do-list-service'
import * as _ from 'lodash'
import { Router, NavigationEnd } from '@angular/router';

import { Store, select } from '@ngrx/store'
import { removeToDo, initToDoList, addToDo } from '../../core/action/todo.action'


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
  providers: [TodoListService]
})
export class ToDoListComponent implements OnInit {

  toDoList: any
  loading: boolean = false
  toDoTitle: string
  currentRoute: string

  constructor(private toDoService: TodoListService, private router: Router, private store: Store<{ todo: ToDo }>) {
    router.events.subscribe(router => {
      if (router instanceof NavigationEnd) {
        this.currentRoute = router.url
      }
    })

  }

  ngOnInit() {
    this.toDoService.getAllTodos().subscribe(data => {

      this.store.dispatch(initToDoList({ todo: data.filter(data => data.id < 9) }))
      this.store.subscribe(todo => { this.toDoList = todo.todo })
      this.loading = true
    })

  }

  removeToDo(toDoId: number) {
    this.toDoService.deleteTodoById(toDoId);
    this.toDoList.splice(_.findIndex(this.toDoList, todo => todo.id == toDoId), 1);
    this.store.dispatch(removeToDo())
  }

  updateToDo(toDo: ToDo) {
    this.toDoTitle = toDo.title
  }

  addToDo(toDo) {
    this.toDoList.push({
      userId: 0,
      id: 0,
      title: toDo.title,
      completed: false
    })
    this.store.dispatch(addToDo())

  }

  clickRow(toDo: ToDo) {
    this.router.navigateByUrl('/taskDetails', { state: toDo });
  }

}

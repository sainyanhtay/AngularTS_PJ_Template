import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { Observable } from 'rxjs'
import { ToDo } from '../../core/models/toDo'


@Injectable()
export class TodoListService {

    toDoList: ToDo[]

    constructor(private apiService: ApiService) { }

    deleteTodoById(todoId: number): Observable<ToDo> {
        return this.apiService.deleteToDoById(todoId);
    }

    updateTodoById(todoId: number): Observable<ToDo> {
        return this.apiService.updateToDoById(todoId);
    }

    getAllTodos() {

        return this.apiService.getAllToDos()
    }

    createTodo(toDo: ToDo): Observable<ToDo> {
        return this.apiService.createTodo(toDo)
    }

    // setToDoList(todoList : ToDo[]){
    //     this.getAllTodos().subscribe(res => {
    //         console.log('todo length', res.length);
    //         const list = res.filter(todo => todo.id < 9);
    //       })
    // }
}
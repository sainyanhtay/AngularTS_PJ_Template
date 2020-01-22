import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ToDo } from '../app/core/models/toDo'
import { TodoListService } from '../app/containers/to-do-list/to-do-list-service'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './common/common.scss']
})
export class AppComponent {
  title = 'angular-project';

  todo: any

  constructor(private store: Store<{ todo: ToDo }>, private todoService: TodoListService) { }

}

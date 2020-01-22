import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../../containers/to-do-list/to-do-list-service'

import { Store, select } from '@ngrx/store'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private todoService: TodoListService) { }

  ngOnInit() {
  }

}

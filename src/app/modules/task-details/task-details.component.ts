import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {

  checkListActive: boolean = false
  statusActive: boolean = false

  routeData: any

  constructor(private router: Router) {
    this.routeData = this.router.getCurrentNavigation().extras.state
  }

  ngOnInit() {
  }

  click(name) {

    if (name == 'CheckList') {
      this.checkListActive = true
      this.statusActive = false

    }
    else if (name == 'Status') {
      this.statusActive = true
      this.checkListActive = false
    }

  }

}

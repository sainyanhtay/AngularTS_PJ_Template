import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables'
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RoutesModule } from '../modules/modules-routing'


// components folder components
import { ToDoComponent } from './to-do/to-do.component'
import { ToDoListComponent } from '../containers/to-do-list/to-do-list.component'

// modules folder componnets
import { HomeComponent } from '../modules/home/home.component'
import { LoginComponent } from '../modules/login/login.component';
import { SearchComponent } from '../modules/search/search.component'
import { TaskDetailsComponent } from '../modules/task-details/task-details.component'



@NgModule({
    imports: [CommonModule, FormsModule, DataTablesModule, HttpClientModule, BrowserModule],
    declarations: [
        HomeComponent,
        LoginComponent,
        ToDoComponent,
        ToDoListComponent,
        SearchComponent,
        TaskDetailsComponent
    ],
})

export class ComponentsModule { }
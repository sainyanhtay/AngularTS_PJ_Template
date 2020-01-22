import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { RoutesModule } from '../app/modules/modules-routing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../app/services/api.service';
import { ComponentsModule } from './components/components.module'
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { TodoListService } from './containers/to-do-list/to-do-list-service'

import { DataTablesModule } from 'angular-datatables'
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { CheckListComponent } from './containers/check-list/check-list.component';
import { StatusComponent } from './containers/status/status.component';

import { todoReducer } from '../app/core/reducer/todo.reducer'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CheckListComponent,
    StatusComponent,
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    HttpClientModule,
    ComponentsModule,
    DataTablesModule,
    FormsModule,
    StoreModule.forRoot({ todo: todoReducer })
  ],
  providers: [ApiService, TodoListService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

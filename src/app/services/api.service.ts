import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { ToDo } from '../core/models/toDo'
import { catchError, map } from 'rxjs/operators'


const API_URL = environment.apiUrl

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) { }

    public getAllToDos() {

        return this.http.get<ToDo[]>(API_URL + '/todos').pipe(catchError(this.handleError));
    }

    public createTodo(toDo: ToDo): Observable<ToDo> {

        return this.http.post<ToDo>(API_URL + '/todos', toDo).pipe(catchError(this.handleError));
    }

    public deleteToDoById(toDoId: number): Observable<null> {

        return this.http.delete<null>(API_URL + '/todos' + toDoId).pipe(catchError(this.handleError));
    }

    public updateToDoById(toDoId: number): Observable<ToDo> {

        return this.http.put<ToDo>(API_URL + '/todos', toDoId).pipe(catchError(this.handleError));
    }

    private handleError(error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }

}
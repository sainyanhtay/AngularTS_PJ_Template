import { createReducer, on, State } from '@ngrx/store'
import { addToDo, removeToDo, initToDoList } from '../action/todo.action'
import { ToDo } from '../models/toDo'


export const initialState: ToDo = {
    userId: 0,
    id: 0,
    title: "Hello World",
    completed: false

}

const _todoReducer = createReducer(initialState,
    on(initToDoList, (state, { todo }) => (state = todo))

);

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}

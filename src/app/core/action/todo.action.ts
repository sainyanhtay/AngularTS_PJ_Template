
import { createAction, props } from '@ngrx/store'


export const initToDoList = createAction('INIT_STORE_DATA', props<{ todo }>())
export const addToDo = createAction('ADD_TODO')
export const removeToDo = createAction('REMOVE_TODO')
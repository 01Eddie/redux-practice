import { configureStore } from '@reduxjs/toolkit'
import { createStore } from 'redux'
import counterReducer from "./UseSelectorVSConnect/counterSlice"
import todoApp from './ReduxBasicoEjemploTodo/Redux/reducers'

export const storeCounter = configureStore({
    reducer: {
        counter: counterReducer,
    },
});
export const storeTodo = createStore(todoApp)


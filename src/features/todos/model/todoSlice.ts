import { createSlice } from "@reduxjs/toolkit";

export interface Todo {
    id: number
    todoText: string
    status: boolean
}
interface TodoState {
    todos: Todo[]
}


const initialState: TodoState = {
    todos: [
        {
            id: Date.now(),
            todoText: "Завершить написание SEO-текста с учетом всех требований.",
            status: false,
        }
    ]
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: Date.now(),
                todoText: action.payload,
                status: false,
            })
        },
        toggleTodo: (state, action) => {
            const toggleTodo = state.todos.find(el => el.id === action.payload)
            if (toggleTodo) {
                toggleTodo.status = !toggleTodo?.status
            }
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(el => el.id !== action.payload)
        },
        editTodo: (state, action) => {
            const toggleTodo = state.todos.find(el => el.id === action.payload.id)
            if (toggleTodo) {
                toggleTodo.todoText = action.payload.text
            }
        }
    }
})
export const { addTodo, toggleTodo, deleteTodo, editTodo } = todosSlice.actions;
export const todosReducer = todosSlice.reducer

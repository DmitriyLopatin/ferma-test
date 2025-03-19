import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
    id: number
    todoText: string
    status: boolean
}
export interface TodoState {
    todos: Todo[]
}

export const initialTodos: TodoState = {
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
    initialState:initialTodos,
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
        },
        reorderTodos: (state, action: PayloadAction<{ startIndex: number; endIndex: number }>) => {
            const { startIndex, endIndex } = action.payload;
            const [removed] = state.todos.splice(startIndex, 1); // Удаляем элемент из старой позиции
            state.todos.splice(endIndex, 0, removed); // Вставляем элемент в новую позицию
          }
    }
})
export const { addTodo, toggleTodo, deleteTodo, editTodo, reorderTodos } = todosSlice.actions;
export const todosReducer = todosSlice.reducer

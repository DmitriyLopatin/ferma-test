import { createSlice } from "@reduxjs/toolkit";

interface Todo  {
    id:number
    todoText:string
    status:boolean
}
interface TodoState {
    todos:Todo[]
}


const initialState:TodoState = {
    todos:[]
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo:(state,action)=>{
            state.todos.push({
                id: Date.now(),
                todoText: action.payload,
                status: false,
            })
        },
        toggleTodo:(state, action)=>{

        },
        deleteTodo:()=>{

        }
    }
})
export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export const todosReducer = todosSlice.reducer

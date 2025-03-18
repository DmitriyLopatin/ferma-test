import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "../../features/todos/model/todoSlice";
import { filtersReducer } from "@/features/filter/model/filterSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { modalReducer } from "@/features/modal/model/modalSlice";


export const store = configureStore({
    reducer:{
        todos: todosReducer,
        filters:filtersReducer,
        modal: modalReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch =  useDispatch<AppDispatch>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
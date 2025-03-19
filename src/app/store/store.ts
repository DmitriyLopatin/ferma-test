import { configureStore } from "@reduxjs/toolkit";
import { initialTodos, todosReducer, TodoState } from "../../features/todos/model/todoSlice";
import { filtersReducer, FilterState, initialFilters } from "@/features/filter/model/filterSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { modalReducer } from "@/features/modal/model/modalSlice";
import localStorageMiddleware from "../middleware/localStorageMiddleware";


const localStorageTodos = (key:string,initialData:TodoState|FilterState) => {
    const serializedData = localStorage.getItem(key);
    if (serializedData) {
        return JSON.parse(serializedData)
    }else return initialData
};

const preloadedState = {
    todos: localStorageTodos("todos", initialTodos),
    filters: localStorageTodos("filters", initialFilters)
};

export const store = configureStore({
    reducer: {
        todos: todosReducer,
        filters: filtersReducer,
        modal: modalReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware),
    preloadedState
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch<AppDispatch>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
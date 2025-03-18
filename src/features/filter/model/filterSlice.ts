import { createSlice } from "@reduxjs/toolkit";

interface Filter {
    id: number
    active: string
    text: string
    status:"all"|false|true
    color: "main" | "green" | "red"
}

interface Filters {
    filters: Filter[]
}
const filtersInit: Filters = {
    filters: [
        { id: 1, active: "active", text: "Все", color: "main", status:"all" },
        { id: 2, active: "", text: "Выполненые", color: "green", status:true },
        { id: 3, active: "", text: "Не выполненные", color: "red", status:false },
    ]
}

const filtersSlice = createSlice({
    name: "filter",
    initialState: filtersInit,
    reducers: {
        setFilterActive: (state, action) => {
            state.filters.forEach(filter => {
                filter.active = filter.id === action.payload ? "active" : "";
            });
        }
    }
})

export const filtersReducer = filtersSlice.reducer
export const { setFilterActive } = filtersSlice.actions
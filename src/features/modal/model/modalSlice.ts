import { createSlice } from "@reduxjs/toolkit";

interface Modal {
    isOpen:boolean
}
const modalInitState : Modal= {
    isOpen:false
}

const modalSlice = createSlice({
    name:"modal",
    initialState:modalInitState,
    reducers:{
        openModal:(state)=>{
            state.isOpen = true
        },
        closeModal:(state)=>{
            state.isOpen = false
        }
    }
})
export const {openModal, closeModal} = modalSlice.actions
export const modalReducer = modalSlice.reducer
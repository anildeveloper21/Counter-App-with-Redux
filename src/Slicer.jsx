import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: 0
}

const slicer =  createSlice({
    name:'ShowData',
    initialState,
    reducers: {
        add: (state) => {
            state.value = state.value + 1;
        },
        sub: (state) => {
            state.value = state.value - 1;
        },
        addValue: (state, action) => {
            state.value = state.value + action.payload
        }
    }
})
 export const {add, sub, addValue} = slicer.actions;
 export default slicer.reducer;
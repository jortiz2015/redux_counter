import { createSlice } from "@reduxjs/toolkit";

const initCounterState = {counter: 0, showCount: true};
const counterSlice = createSlice({
    name: "counter",
    initialState: initCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCount(state){
            state.showCount = !state.showCount;
        }
    }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
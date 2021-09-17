import { configureStore, createSlice } from "@reduxjs/toolkit";

const initState = {counter: 0, showCount: true};
const counterSlice = createSlice({
    name: "counter",
    initialState: initState,
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

const store = configureStore({
    reducer : counterSlice.reducer
});

export const counterActions = counterSlice.actions;

export default store;
import { configureStore, createSlice } from "@reduxjs/toolkit";

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


const initAuthState = {auth: false};
const authSlice = createSlice({
    name: "auth",
    initialState: initAuthState,
    reducers: {
        login(state) {
            state.auth = true;
        },

        logout(state) {
            state.auth = false;
        }
    }
});

const store = configureStore({
    reducer : {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
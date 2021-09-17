import { createStore } from "redux";

const initState = {counter: 0, showCount: true};
const counterReducer = (state = initState, action) => {
    if (action.type === "decrement") {
        return {
            counter: state.counter - 1,
            showCount: state.showCount 
        };
    }

    if (action.type === "increase") {
        return {
            counter: state.counter + action.amount,
            showCount: state.showCount 
        };
    }

    if (action.type === "increment") {
        return {
            counter: state.counter + 1,
            showCount: state.showCount 
        };
    }

    if (action.type === "toggle") {
        return {
            counter: state.counter,
            showCount: !state.showCount 
        };
    }

    return state;
};

const store = createStore(counterReducer);

export default store;
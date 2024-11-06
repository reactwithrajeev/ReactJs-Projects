import { createStore } from "redux";

const initialState = {
    counter: 0
}
const counterReducer = (state = initialState, action) => {
    if(action.type === 'INCREMENT'){
        return {counter: state.counter + 1};
    }
    if(action.type === 'DECREMENT'){
        return {counter: state.counter - 1};
    }
    return state;
}
const counterStore = createStore(counterReducer);


export default counterStore;


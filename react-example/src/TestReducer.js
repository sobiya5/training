import React, {useReducer} from "react";

const initialState = 0;

const reducer = (state,action) => {
    switch(action) {
        case 'add':
            return state+1;
        case 'subtract':
            return state-1;
        case 'reset' :
            return 0;
        default:
            throw new Error("unknown input");
    }
};

const TestReducer = () => {
    const[count,dispatch] = useReducer(reducer,initialState);
    return(
        <div>
            <h2>Using Hooks useReducer</h2>
            <h2>Count = {count}</h2>
            <button onClick={()=> dispatch("add")}>Add</button> &nbsp;
            <button onClick={()=> dispatch("subtract")}>Subtract</button> &nbsp;
            <button onClick={()=> dispatch("reset")}>Reset</button> &nbsp;
        </div>
    );
}

export default TestReducer;

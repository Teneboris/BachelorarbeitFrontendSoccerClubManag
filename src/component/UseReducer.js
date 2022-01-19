import React, {useReducer} from 'react';

const initialState = {count:0}
const reducer = (state, action) =>{
    switch(action.type) {
        case "increment":
            return {count:state.count + 1}
            
        case "decrement":
            return {count:state.count - 1}
    }
}

function UseReducer() {

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h2> count: {state.count}</h2>
            <button className="btn btn-primary" onClick={() => dispatch({type:"increment"})}>Increment</button>
            <button className="btn btn-primary" onClick={() => dispatch({type:"decrement"})}>Decrement</button>
        </div>
    );
}

export default UseReducer;

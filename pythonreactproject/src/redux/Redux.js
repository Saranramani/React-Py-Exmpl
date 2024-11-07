import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from './actions';


const Redux = ()=> {
    
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div data-testid="redux-div">
            <h3 data-testid="counter-text">{counter}</h3>
            <button onClick={() => dispatch(increment(3))} data-testid="btn-inc">INCREMENT</button>
            <button onClick={() => dispatch(decrement(3))} data-testid="btn-dec">DECREMENT</button>
            <button onClick={() => dispatch(reset())} data-testid="btn-reset">RESET</button>
        </div>
    )
};

export default Redux;
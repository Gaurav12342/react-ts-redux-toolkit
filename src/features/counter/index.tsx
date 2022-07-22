import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset, addedByAmount } from '../counter/counterSlice';
import { ICounter } from '../../interface/counter';

const CounterCom = () => {
    const dispatch = useDispatch();
    const userCounter = useSelector((state: ICounter) => state.counter.count);
    const [incrementCount, setIncrementCount] = useState<number>(0);

    const addValue: number = +incrementCount || 0;
    const resetAllValue = () => {
        setIncrementCount(0);
        dispatch(reset())
    }
    return (
        <section>
            <div>
                <p>Count : {userCounter}</p>
                <button onClick={() => dispatch(increment())}>Increament</button>
                <button onClick={() => dispatch(decrement())}>Decreament</button>
                <button onClick={() => dispatch(reset())}>Reset</button>
            </div>

            <div>
                <input type={'text'} name="txtCount" value={incrementCount} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIncrementCount(+e.target.value)} />
            </div>
            <div>
                <button onClick={() => { dispatch(addedByAmount(addValue)) }}>Increment By value</button>
                <button onClick={resetAllValue}>Reset All</button>
            </div>
        </section >
    )
}

export default CounterCom
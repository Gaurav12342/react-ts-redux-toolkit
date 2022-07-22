import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICount } from '../../interface/counter';
const initialState: ICount = {
    count: 0
};
export const counterSlice = createSlice({
    name: "counter",
    initialState,
    // `createSlice` will infer the state type from the `initialState` argument
    reducers: {
        increment: (state) => {
            console.log("state =>", state);

            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        reset: (state) => {
            state.count = 0
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        addedByAmount: (state, action: PayloadAction<number>) => {
            state.count += action.payload;
        }
    }
});

export const { decrement, increment, reset, addedByAmount } = counterSlice.actions;
export default counterSlice.reducer;
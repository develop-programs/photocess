import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/Redux/store'

// Define a type for the slice state
interface CounterState {
    value: string
}

// Define the initial state using that type
const initialState: CounterState = {
    value: "",
}

export const Data = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addData(state, action: PayloadAction<string>) {
            state.value = action.payload
        },
        removeData(state) {
            state.value = ""
        },
    },
})

export const { addData } = Data.actions

// Other code such as selectors can use the imported `RootState` type
export const info = (state: RootState) => state.data.value

export default Data.reducer
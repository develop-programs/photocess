import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/Redux/store'

// Define a type for the slice state
interface CounterState {
    image: string
    loading: boolean
}

// Define the initial state using that type
const initialState: CounterState = {
    image: "",
    loading: true
}

export const Resizer = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addData(state, action: PayloadAction<string>) {
            state.image = action.payload
            state.loading = false
        },
        removeData(state) {
            state.image = ""
            state.loading = true
        },
    },
})

export const { addData } = Resizer.actions

// Other code such as selectors can use the imported `RootState` type
export const info = (state: RootState) => state.data

export default Resizer.reducer
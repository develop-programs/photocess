import { configureStore } from '@reduxjs/toolkit'
import Data from './reducers/data'
import authslice from './reducers/AuthSlice'
import Resizer from './reducers/resize'
import Upscaler from './reducers/upscaler'

export const store = configureStore({
    reducer: {
        data: Data,
        resizer: Resizer,
        upscale: Upscaler,
        auth: authslice,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
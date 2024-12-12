import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// Define types for user and subscription data
interface User {
    id: string;
    email: string;
    name: string;
    password: string;
    image: string;
    isEmailVerified: boolean;
    createdAt: string;
    updatedAt: string;
}

interface Subscription {
    id: string;
    userId: string;
    plan: string;
    credit: number;
    createdAt: string;
    updatedAt: string;
}

interface AuthState {
    user: User | null;
    subscription: Subscription | null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    subscription: null,
    loading: false,
    error: null
}

// Async thunk for fetching data
export const fetchData = createAsyncThunk("auth/fetchData", async (email: string) => {
    const response = await axios.get(`${window.location.origin}/api/auth?email=${email}&subscription=true`);
    return response.data;
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.subscription = null;
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action: PayloadAction<{ user: User; subscription: Subscription }>) => {
            state.user = action.payload.user;
            state.subscription = action.payload.subscription;
            state.loading = false;
            state.error = null;
        });
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Failed to fetch data";
        });
        builder.addCase(fetchData.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
    }
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
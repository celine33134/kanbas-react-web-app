

// account/reducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the structure for the currentUser object
interface User {
    id: string;
    username: string;
    email: string;
    // Add any additional fields as needed
}

interface AccountState {
    currentUser: User | null; // Update to use `User` type
}

const initialState: AccountState = {
    currentUser: null, // Default is no user
};

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<User | null>) => {
            state.currentUser = action.payload; // Update `currentUser` with the payload
        },
        // Optional: Add a logout action
        logout: (state) => {
            state.currentUser = null; // Reset user on logout
        },
    },
});

export const { setCurrentUser, logout } = accountSlice.actions;
export default accountSlice.reducer;

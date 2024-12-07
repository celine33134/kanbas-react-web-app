

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define types for Module and ModuleState
interface Module {
    _id: string;
    lessons: any[]; // Define a more specific type for lessons if possible
    name: string;
    course: string;
    editing?: boolean; // Optional, defaults to false if not set
}

interface ModulesState {
    modules: Module[];
}

const initialState: ModulesState = {
    modules: [], // Initial state with empty modules array
};

const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        // Set modules (e.g., after fetching from API)
        setModules: (state, action: PayloadAction<Module[]>) => {
            state.modules = action.payload;
        },

        // Add a new module
        addModule: (state, action: PayloadAction<Omit<Module, '_id'>>) => {
            const newModule: Module = {
                _id: new Date().getTime().toString(),
                lessons: [],
                name: action.payload.name,
                course: action.payload.course,
            };
            state.modules.push(newModule);
        },

        // Delete a module by its ID
        deleteModule: (state, action: PayloadAction<string>) => {
            state.modules = state.modules.filter((m) => m._id !== action.payload);
        },

        // Update a module by its ID
        updateModule: (state, action: PayloadAction<Module>) => {
            state.modules = state.modules.map((m) =>
                m._id === action.payload._id ? action.payload : m
            );
        },

        // Edit a module (set its editing flag to true)
        editModule: (state, action: PayloadAction<string>) => {
            state.modules = state.modules.map((m) =>
                m._id === action.payload ? { ...m, editing: true } : m
            );
        },
    },
});

// Export actions and reducer
export const { addModule, deleteModule, updateModule, editModule, setModules } =
    modulesSlice.actions;

export default modulesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database"; // Import assignments data from the database

// Define the initial state
const initialState = {
    assignments: assignments,
};

// Create the slice
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                name: assignment.name,
                description: assignment.description,
                dueDate: assignment.dueDate,
                course: assignment.course,
            };
            state.assignments = [...state.assignments, newAssignment];
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (a: any) => a._id !== assignmentId
            );
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignment._id ? assignment : a
            );
        },
        editAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignmentId ? { ...a, editing: true } : a
            );
        },
    },
});

// Export the actions and the reducer
export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } =
    assignmentsSlice.actions;

export default assignmentsSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the Enrollment object
interface Enrollment {
    courseId: string;
    userId: string;
    _id: string; // Assuming there is a unique ID for each enrollment
}

interface EnrollmentsState {
    enrollments: Enrollment[];
}

// Set the initial state with the proper type
const initialState: EnrollmentsState = {
    enrollments: [],
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        setEnrollments: (state, action: PayloadAction<Enrollment[]>) => {
            state.enrollments = action.payload;
        },
        enroll: (state, action: PayloadAction<Enrollment>) => {
            state.enrollments.push(action.payload);
        },
        unenroll: (state, action: PayloadAction<{ courseId: string; userId: string }>) => {
            const { courseId, userId } = action.payload;
            state.enrollments = state.enrollments.filter(
                (enrollment) => !(enrollment.courseId === courseId && enrollment.userId === userId)
            );
        },
    },
});

export const { setEnrollments, enroll, unenroll } = enrollmentsSlice.actions;

export default enrollmentsSlice.reducer;

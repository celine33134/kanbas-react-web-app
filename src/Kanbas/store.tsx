import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import assignmentsReducer from "./Courses/Assignment/reducer";
import enrollmentsReducer from "./Courses/Enrollments/reducer";


const store = configureStore({
    reducer: {
        modulesReducer,
        assignmentsReducer,
        enrollmentsReducer,
    },
});

export default store;


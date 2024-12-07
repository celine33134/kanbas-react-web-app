import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import assignmentsReducer from "./Courses/Assignment/reducer";
import enrollmentsReducer from "./Courses/Enrollments/reducer";
import accountReducer from './Account/reducer';

const store = configureStore({
    reducer: {
        modules: modulesReducer,
        assignments: assignmentsReducer,
        enrollments: enrollmentsReducer,
        account: accountReducer,
    },
});

export default store;


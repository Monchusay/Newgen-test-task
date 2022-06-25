import {combineReducers, configureStore} from "@reduxjs/toolkit";
import CoursesListToolkitSlicer from "./CoursesListToolkitSlicer";

const rootReducer = combineReducers({
    CoursesList: CoursesListToolkitSlicer
})

const store = configureStore({
    reducer: rootReducer
})

export default store
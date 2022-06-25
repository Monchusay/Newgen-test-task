import { combineReducers, createStore } from "redux";
import CoursesListReducer from "./CoursesListReducer";

let reducers = combineReducers({
  CoursesList: CoursesListReducer,
});

let store = createStore(reducers);

/*export default store;*/

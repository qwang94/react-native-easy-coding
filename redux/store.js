import { createStore, combineReducers } from "redux";
import reducerCourses from "./reducers/reducerCourses";

const rootReducer = combineReducers({
    courses: reducerCourses
});

const store = createStore(rootReducer);

export default store;

import { createStore, combineReducers } from "redux";
import reducerCourses from "./reducers/reducerCourses";
import reducerCart from "./reducers/reducerCart";

const rootReducer = combineReducers({
    courses: reducerCourses,
    cart: reducerCart
});

const store = createStore(rootReducer);

export default store;

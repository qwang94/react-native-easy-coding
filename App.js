import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import UserCourses from "./screens/UserCourses";

export default function App() {
  return (
    <Provider store={store}>
        <UserCourses />
    </Provider>
  );
}

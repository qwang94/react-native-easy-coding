import COURSES from '../../data/testData';
import { ADD_TO_CART, REMVOE_FROM_CART } from '../constants';

const initialState = {
    existingCourses: COURSES
}

const reducerCourses = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addedIndex = state.existingCourses.findIndex(course => course.id === action.course.id);
            const copyCoursesAfterAdd = [...state.existingCourses];
            copyCoursesAfterAdd[addedIndex].selected = true;

            return {
                ...state,
                existingCourses: copyCoursesAfterAdd
            }

        case REMVOE_FROM_CART:
            const removedIndex = state.existingCourses.findIndex(course => course.id === action.courseId);
            const copyCoursesAfterRemove = [...state.existingCourses];
            copyCoursesAfterRemove[removedIndex].selected = false;

            return {
                ...state,
                existingCourses: copyCoursesAfterRemove
            }

        default:
            return state;
    }
}

export default reducerCourses;

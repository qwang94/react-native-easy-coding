import COURSES from '../../data/testData';
import { ADD_TO_CART } from '../constants';

const initialState = {
    existingCourses: COURSES
}

const reducerCourses = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const index = state.existingCourses.findIndex(course => course.id === action.course.id);
            const copyCourses = [...state.existingCourses];
            copyCourses[index].selected = true;

            return {
                ...state,
                existingCourses: copyCourses
            }
    }

    return state;
}

export default reducerCourses;

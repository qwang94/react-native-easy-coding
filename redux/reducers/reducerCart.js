import CartCourse from '../../data/CartCourseModel';
import { ADD_TO_CART } from '../constants';

const initialState = {
    cartCourses: [], // {idCourse, price, title}
    total: 0
}

const reducerCart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const course = new CartCourse(action.course.id, action.course.price, action.course.title);

            return {
                ...state,
                cartCourses: state.cartCourses.concat(course),
                total: state.total + course.price
            }
        default:
            break;
    }

    return state;
}

export default reducerCart;

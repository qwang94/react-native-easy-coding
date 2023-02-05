import CartCourse from '../../data/CartCourseModel';
import { ADD_TO_CART, REMVOE_FROM_CART } from '../constants';

const initialState = {
    cartCourses: [], // {idCourse, price, title}
    total: 0
}

const reducerCart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addedCourse = new CartCourse(action.course.id, action.course.price, action.course.title);

            return {
                ...state,
                cartCourses: state.cartCourses.concat(addedCourse),
                total: state.total + addedCourse.price
            }
        case REMVOE_FROM_CART:
            const indexResult = state.cartCourses.findIndex(course => course.id === action.courseId);
            const newCartCourses = [...state.cartCourses];
            newCartCourses.splice(indexResult, 1);
            const coursePrice = state.cartCourses[indexResult].price;

            return {
                ...state,
                cartCourses: newCartCourses,
                total: state.total - coursePrice
            }
        default:
            return state;
    }
}

export default reducerCart;

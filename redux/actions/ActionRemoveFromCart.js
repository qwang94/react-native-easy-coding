import { REMVOE_FROM_CART } from "../constants";

export const removeFromCart = (courseId) => {
    return {
        type: REMVOE_FROM_CART,
        courseId: courseId
    }
}

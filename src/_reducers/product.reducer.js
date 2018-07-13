import {
    productConstants
} from '../_constants';

export function products(state = {}, action) {
    switch (action.type) {
        case productConstants.GETALL_REQUEST:
            return {
                loading: true,
            }
        case productConstants.GETALL_SUCCESS:
            return {
                products: action.products
            }
        case productConstants.GETALL_FAILURE:
            return {
                error: action.error
            }
        case productConstants.GETDETAIL_REQUEST:
            return {
                loading: true,
            }
        case productConstants.GETDETAIL_SUCCESS:
            return {
                product: action.products
            }
        case productConstants.GETDETAIL_FAILURE:
            return {
                error: action.error
            }
        default:
            return state;
    }
}
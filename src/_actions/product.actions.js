import { productConstants } from '../_constants';
import { productServices } from '../_services';

export const productActions = {
    getAll,
    getCategoryId,
    getById,
}

function getAll(){
    return dispatch => {
        dispatch(request())
        productServices.getAll().then(
            products => dispatch(success(products.data)),
            error => dispatch(failure(error))
        )
    }

    function request() {return {type: productConstants.GETALL_REQUEST}}
    function success(products) {return {type: productConstants.GETALL_SUCCESS, products}}
    function failure(error) {return {type: productConstants.GETALL_FAILURE, error}}
}

function getCategoryId(categoryId){

}

function getById(id){
    return dispatch => {
        dispatch(request())
        productServices.getById(id).then(
            product => dispatch(success(product.data)),
            error => dispatch(failure(error))
        )
    }

    function request() {return {type: productConstants.GETDETAIL_REQUEST}}
    function success(products) {return {type: productConstants.GETDETAIL_SUCCESS, products}}
    function failure(error) {return {type: productConstants.GETDETAIL_FAILURE, error}}
}
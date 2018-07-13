import { categoryConstants} from '../_constants';
import { categoryService } from '../_services';

export const categoryActions = {
    getAll,
    getById,
    insert,
    update,
    delete: _delete,
}

function getAll() {
    return dispatch => {
        dispatch(request());
        categoryService.getAll().then(
            categories => dispatch(success(categories.data)),
            error => dispatch(failure(error))
        )
    }

    function request() {return {type: categoryConstants.GETALL_REQUEST}}
    function success(categories) { return { type: categoryConstants.GETALL_SUCCESS, categories } }
    function failure(error) { return { type: categoryConstants.GETALL_FAILURE, error } }
}

function getById(id) {

}

function insert(category) {

}

function update(category) {

}

function _delete(id){

}
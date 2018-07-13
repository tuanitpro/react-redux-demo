import { environment } from '../environments/environment';
import axios from 'axios';

export const categoryService = {
    getAll,
    getById,
    insert,
    update,
    delete: _delete,
}

function getAll() {
   return axios.get(`${environment.BASE_API_URL}/category`);
}

function getById(id) {

}

function insert(category) {

}

function update(category){

}

function _delete(id){

}

import { environment } from '../environments/environment';
import axios from 'axios';

export const productServices = {
    getAll,
    getCategoryId,
    getById,
}

function getAll(){
    return axios.get(`${environment.BASE_API_URL}/products/?page=1&take=36&keyword=`);
}

function getCategoryId(categoryId){
    return axios.get(`${environment.BASE_API_URL}/products/?page=1&take=36&keyword=`);
}

function getById(id){
    return axios.get(`${environment.BASE_API_URL}/products/`+id);
}

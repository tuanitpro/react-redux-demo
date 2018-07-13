import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { categories } from './category.reducer';
import { products } from './product.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  categories,
  products
});

export default rootReducer;
import { combineReducers } from 'redux';

import { cachReducer } from './cash/reducer';
import { customersReducer } from './customers/reducer';

export const rootReducer = combineReducers({
  cash: cachReducer,
  customers: customersReducer,
});

// export const rootReducer = (state = {}, action) => {
//   return {
//     cash: cachReducer(state.cash, action),
//     customers: customersReducer(state.customers, action),
//   };
// };

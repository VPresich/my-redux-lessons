import {
  defaultCustomersState,
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
} from './constants';

export const customersReducer = (state = defaultCustomersState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return [...state, action.payload];

    case DELETE_CUSTOMER:
      return state.filter(customer => customer.id !== action.payload);

    default:
      return state;
  }
};

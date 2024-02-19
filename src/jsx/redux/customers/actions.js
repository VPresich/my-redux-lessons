import { ADD_CUSTOMER, DELETE_CUSTOMER } from './constants';
export const addCustomer = customer => {
  return {
    type: ADD_CUSTOMER,
    payload: customer,
  };
};

export const deleteCustomer = id => {
  return {
    type: DELETE_CUSTOMER,
    payload: id,
  };
};

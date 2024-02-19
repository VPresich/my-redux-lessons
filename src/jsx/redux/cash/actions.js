import { ADD_CASH, DELETE_CASH } from './costants';

export const addCash = cash => {
  return {
    type: ADD_CASH,
    payload: cash,
  };
};

export const deleteCash = cash => {
  return {
    type: DELETE_CASH,
    payload: cash,
  };
};

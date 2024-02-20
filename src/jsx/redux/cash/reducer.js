import { defaultCashState, ADD_CASH, DELETE_CASH } from './costants';
export const cachReducer = (state = defaultCashState, action) => {
  switch (action.type) {
    case ADD_CASH:
      return state + action.payload;

    case DELETE_CASH:
      return state - action.payload;

    default:
      return state;
  }
};

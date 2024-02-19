import { defaultState, ADD_CASH, DELETE_CASH } from './costants';

export const cachReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CASH:
      return { ...state, cash: state.cash + action.payload };

    case DELETE_CASH:
      return { ...state, cash: state.cash - action.payload };

    default:
      return state;
  }
};

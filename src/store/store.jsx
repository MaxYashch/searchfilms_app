import { createStore } from 'redux';

const defaultState = {
  cash: 0,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, cash: state.cash - action };
    case 'GET':
      return { ...state, cash: state.cash + action };
    default:
      return state;
  }
};

export const store = createStore(reducer);

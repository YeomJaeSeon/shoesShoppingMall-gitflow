import { createStore } from "redux";

export const ACTIONS = {
  ADD_SHOES: "ADD_SHOES",
  DELETE_SHOES: "DELETE_SHOES",
  DELETE_ALL: "DELETE_ALL",
};

const initialState = [{ id: 0, sum: 0 }];

let nextId = 0;
export default createStore((state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_SHOES:
      state[0].sum += action.payload.price;
      return [
        ...state,
        {
          id: ++nextId,
          product: action.payload.product,
          price: action.payload.price,
        },
      ];
    case ACTIONS.DELETE_SHOES:
      state[0].sum -= action.payload.price;
      return state.filter((value) => value.id !== action.payload.id);
    case ACTIONS.DELETE_ALL:
      return [{ id: 0, sum: 0 }];
    default:
      return state;
  }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

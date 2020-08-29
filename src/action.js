import { ACTIONS } from "./store";

export const deleteShoes = (value) => {
  return {
    type: ACTIONS.DELETE_SHOES,
    payload: { id: value.id, price: value.price },
  };
};

export const addShoes = (value) => {
  return {
    type: ACTIONS.ADD_SHOES,
    payload: { product: value.product, price: value.price },
  };
};

export const deleteAll = () => {
  return {
    type: ACTIONS.DELETE_ALL,
  };
};

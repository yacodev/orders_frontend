import { useReducer } from "react";
import { ADD_ITEM, SUBSTRACT_ITEM } from "../constants";

function totalReducer(state, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        total: state.total + action.price,
        productsIds: [...state.productsIds, action.id],
      };
    case SUBSTRACT_ITEM:
      const copyOfProductsIds = [...state.productsIds];
      const idx = copyOfProductsIds.indexOf(action.id);
      copyOfProductsIds.splice(idx, 1);
      return {
        ...state,
        total: state.total - action.price,
        productsIds: copyOfProductsIds,
      };
    default:
      return state;
  }
}

export default function useTotalReducer(cartId, cartItems) {
  const initialCalculation = cartItems.reduce((acc, curr) => {
    return acc + curr.price / 100;
  }, 0);

  const [state, dispatch] = useReducer(totalReducer, {
    total: initialCalculation,
    productsIds: cartId,
  });

  function addProduct(price, id) {
    dispatch({ type: ADD_ITEM, price: price, id: id });
  }

  function substractProduct(price, id) {
    dispatch({ type: SUBSTRACT_ITEM, price: price, id: id });
  }

  return [state, { addProduct, substractProduct }];
}

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  lastUpdate: 0,
  date: "",
  item: "",
  price: 0,
  payment: "cash"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_INPUT":
      return {
        ...state,
        lastUpdate: action.lastUpdate,
        date: action.date,
        item: action.item,
        price: action.price,
        payment: action.payment
      };
    default:
      return state;
  }
};

export const initializeStore = (preloadedState = initialState) => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
};

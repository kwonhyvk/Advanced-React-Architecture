import { createContext, useReducer } from "react";

export const AppContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };

    case "LOGOUT":
      return {
        ...initialState,
      };

    case "ADD_TO_CART": {
      const item = action.payload;
      const updatedCart = [...state.cart, item];

      return {
        ...state,
        cart: updatedCart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + item.price,
      };
    }

    case "REMOVE_FROM_CART": {
      const item = action.payload;
      const updatedCart = state.cart.filter((i) => i.id !== item.id);

      return {
        ...state,
        cart: updatedCart,
        totalItems: state.totalItems - 1,
        totalPrice: state.totalPrice - item.price,
      };
    }

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
        totalItems: 0,
        totalPrice: 0,
      };

    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
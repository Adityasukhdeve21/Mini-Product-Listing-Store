import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

// actions
const ADD = "ADD";
const REMOVE = "REMOVE";
const CLEAR = "CLEAR";

function reducer(state, action) {
  switch (action.type) {
    case ADD:
      // do not duplicate items; store qty
      { const exists = state.find((it) => it.id === action.payload.id);
      if (exists)
        return state.map((it) =>
          it.id === action.payload.id ? { ...it, qty: it.qty + 1 } : it
        );
      return [...state, { ...action.payload, qty: 1 }]; }
    case REMOVE:
      return state.filter((item) => item.id !== action.payload);
    case CLEAR:
      return [];
    default:
      throw new Error("Unknown action");
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, []);

  const addToCart = (product) => dispatch({ type: ADD, payload: product });
  const removeFromCart = (id) => dispatch({ type: REMOVE, payload: id });
  const clearCart = () => dispatch({ type: CLEAR });

  return (
    <CartContext.Provider
      value={{ cart, cartCount: cart.length, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);

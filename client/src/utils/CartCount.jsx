import { useContext, useState, createContext, useEffect } from "react";
import { GetCart } from "./APICalls";

const CartCount = createContext();
const CartCountUpdateContext = createContext();

export function useCartCount() {
  return useContext(CartCount);
}
export function useCartCountUpdate() {
  return useContext(CartCountUpdateContext);
}
export function CountProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    GetCart().then((res) => setCartCount(res.length));
  }, []);
  function CartCountUpdate(add) {
    add ? setCartCount(cartCount + 1) : setCartCount(cartCount - 1);
  }

  return (
    <CartCount.Provider value={cartCount}>
      <CartCountUpdateContext.Provider value={CartCountUpdate}>
        {children}
      </CartCountUpdateContext.Provider>
    </CartCount.Provider>
  );
}

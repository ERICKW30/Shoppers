// Context.jsx

import { createContext } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext({ all_product });

const ShopContextProvider = ({ children }) => {
  return (
    <ShopContext.Provider value={{ all_product }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

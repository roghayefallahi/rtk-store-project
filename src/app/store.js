import { configureStore } from "@reduxjs/toolkit";
import productsReduser from "../features/product/productSlice";
import cartReduser from "../features/cart/cartSlice";

const store = configureStore({
  reducer: {
    product: productsReduser,
    cart: cartReduser,
  },
});

export default store;

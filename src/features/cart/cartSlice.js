import { createSlice } from "@reduxjs/toolkit";
import { sumPrice, sumQuantity } from "../../helpers/helper";

// دریافت مقدار اولیه از Local Storage
const getInitialCart = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};
// دریافت مقدار اولیه از Local Storage و محاسبه مقادیر وابسته
const initialSelectedItems = getInitialCart();

const initialState = {
  selectedItems: initialSelectedItems,
  itemsCounter: sumQuantity(initialSelectedItems), // محاسبه تعداد آیتم‌ها
  total: sumPrice(initialSelectedItems), // محاسبه مجموع قیمت‌ها
  checkout: false,
};

// const initialState = {
//   selectedItems: getInitialCart(),
//   itemsCounter: 0,
//   total: 0,
//   checkout: false,
// };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(state.selectedItems));
        state.total = sumPrice(state.selectedItems);
        state.itemsCounter = sumQuantity(state.selectedItems);
        state.checkout = false;
      }
    },
    removeItem: (state, action) => {
      const newSelectedItem = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.selectedItems = newSelectedItem;
      localStorage.setItem("cart", JSON.stringify(state.selectedItems));
      state.total = sumPrice(state.selectedItems);
      state.itemsCounter = sumQuantity(state.selectedItems);
    },
    increase: (state, action) => {
      const increaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[increaseIndex].quantity++;
      localStorage.setItem("cart", JSON.stringify(state.selectedItems));
      state.total = sumPrice(state.selectedItems);
      state.itemsCounter = sumQuantity(state.selectedItems);
    },
    decrease: (state, action) => {
      const decreaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[decreaseIndex].quantity--;
      localStorage.setItem("cart", JSON.stringify(state.selectedItems));
      state.total = sumPrice(state.selectedItems);
      state.itemsCounter = sumQuantity(state.selectedItems);
    },
    checkout: (state) => {
      state.selectedItems = [];
      localStorage.setItem("cart", JSON.stringify(state.selectedItems));
      state.itemsCounter = 0;
      state.total = 0;
      state.checkout = true;
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, increase, decrease, checkout } =
  cartSlice.actions;

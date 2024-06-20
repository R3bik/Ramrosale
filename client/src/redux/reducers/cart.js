import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("addToCart", (state, action) => {
      const item = action.payload;
      const isItemExist = state.cart.find((i) => i.id === item.id);

      if (isItemExist) {
        // Update existing item
        state.cart = state.cart.map((i) =>
          i.id === isItemExist.id ? item : i
        );
      } else {
        // Add new item to the cart
        state.cart.push(item);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    })
    .addCase("removeFromCart", (state, action) => {
      const itemId = action.payload;
      state.cart = state.cart.filter((i) => i.id !== itemId);
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    });
});

export default cartReducer;

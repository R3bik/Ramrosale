import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  wishlist: localStorage.getItem("wishlistItems")
    ? JSON.parse(localStorage.getItem("wishlistItems"))
    : [],
};

const wishlistReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("addToWishlist", (state, action) => {
      const item = action.payload;
      const isItemExist = state.wishlist.find((i) => i.id === item.id);

      if (isItemExist) {
        // Update existing item
        state.wishlist = state.wishlist.map((i) =>
          i.id === isItemExist.id ? item : i
        );
      } else {
        // Add new item to the wishlist
        state.wishlist.push(item);
      }
      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist));
    })
    .addCase("removeFromWishlist", (state, action) => {
      const itemId = action.payload;
      state.wishlist = state.wishlist.filter((i) => i.id !== itemId);
      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist));
    });
});

export default wishlistReducer;

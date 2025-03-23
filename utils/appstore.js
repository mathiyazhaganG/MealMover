import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartslice"; // Import the cart reducer
import menuReducer from "./menuslice"; // Import the menu reducer

const store = configureStore({
  reducer: {
    cart: cartReducer, // Register the cart reducer
	menu: menuReducer, // Register the menu reducer
  },
});

export default store;

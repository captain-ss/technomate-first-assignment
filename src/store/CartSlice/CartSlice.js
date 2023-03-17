import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    ItemList: [],
    totalQuantity: 0,
    ShowCart: false,
  },

  
  reducers: {
    AddToCart(state, action) {
      const NewItem = action.payload;
      const ExistingItem = state.ItemList.find(
        (item) => item.id === NewItem.id
      );
      // console.log(NewItem);
      if (ExistingItem) {
        ExistingItem.cart++;
        ExistingItem.TotalPrice += NewItem.price;
      } else {
        state.ItemList.push({
          id: NewItem._id,
          price: NewItem.price,
          Quantity: NewItem.Quantity,
          TotalPrice: NewItem.price * NewItem.Quantity,
          content: NewItem.content,
          desc: NewItem.desc,
        });
      }
      state.totalQuantity += NewItem.Quantity;
    },

    RemoveFromCart(state, action) {
      const id = action.payload;
      // const payload=action.payload;
      const existingItem = state.ItemList.find((item) => item.id === id);
      if (existingItem.Quantity == 1) {
        state.ItemList = state.ItemList.filter((item) => item.id !== id);
      } else {
        existingItem.Quantity--;
        existingItem.TotalPrice = existingItem.price * existingItem.Quantity;
      }
      state.totalQuantity--;
    },
    SetShowCart(state) {
      state.ShowCart = !state.ShowCart;
    },
    cartIncreament(state, action) {
      const id = action.payload;
      const existingItem = state.ItemList.find((item) => item.id === id);
      existingItem.Quantity++;
      existingItem.TotalPrice += existingItem.price;
      state.totalQuantity++;
    },
    emptyCart(state) {
      state.ItemList = [];
      state.totalQuantity = 0;
    },
  },
});

export const CartAction = CartSlice.actions;

export default CartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const calcularTotal = (items) =>
  items.reduce((acc, item) => acc + item.price * item.quantity, 0);

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    user: "useLogued",
    updateAt: new Date().toISOString(),
    total: 0,
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existente = state.items.find(item => item.id === action.payload.id);

      if (existente) {
        existente.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }

      state.total = calcularTotal(state.items);
      state.updateAt = new Date().toISOString();
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      state.total = calcularTotal(state.items);
      state.updateAt = new Date().toISOString();
    },

    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.updateAt = new Date().toISOString();
    },
  },
});

export const { addItem, removeItem, clearCart } = CartSlice.actions;
export default CartSlice.reducer;

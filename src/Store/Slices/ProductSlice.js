import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectedProducts: [],
  total: 0,
  compareLimit: false,
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      if (action.payload) {
        state.products = action.payload;
      }
    },
    setTotal: (state, action) => {
      if (action.payload) {
        state.total = action.payload;
      }
    },
    setSelectedProducts: (state, action) => {
      console.log(state, action.payload);
      if (state.selectedProducts.length === 4) {
        state.compareLimit = true;
        window.alert("Limit Exceeded");
      } else {
        state.selectedProducts.push(action.payload);
        state.products = state.products.map(product => 
          product.id === action.payload.id ? action.payload : product
        );
      }
    },
    removeSelectedProducts: (state, action) => {
      const idToRemove = action.payload.id;
      state.selectedProducts = state.selectedProducts.filter(
        (obj) => obj.id !== idToRemove
      );
      state.products = state.products.map(product => 
        product.id === action.payload.id ? action.payload : product
      );
    },
    clearSelectedProducts: (state, action) => {
      state.selectedProducts = [];
    },
  },
});

export const {
  setProducts,
  setTotal,
  setSelectedProducts,
  removeSelectedProducts,
  clearSelectedProduct,
} = ProductSlice.actions;

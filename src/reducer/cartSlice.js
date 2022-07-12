import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vehicleStore: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      // console.log("action-PayLoad", action.payload);
      //action.payload truyen vào 1 mảng có 1 phần tử, payload[0] vì mỗi lần ditchpath chỉ truyền vào 1 phàn tử nên index là 0
      // console.log(action.payload[0]);
      const product = action.payload;
      const isExist = state.vehicleStore.findIndex(
        (item) => item.id === product.id
      );
      let newVehicleStore = [...state.vehicleStore];
      if (isExist !== -1) {
        const newProduct = {
          ...newVehicleStore[isExist],
          count: newVehicleStore[isExist].count + 1,
        };
        state.vehicleStore.splice(isExist, 1, newProduct);
      } else {
        state.vehicleStore.push(product);
      }
    },
    decrement: (state, action) => {
      console.log(action.payload);
      const product = action.payload;
      const isExist = state.vehicleStore.findIndex(
        (item) => item.id === product.id
      );
      let newVehicleStore = [...state.vehicleStore];

      if (newVehicleStore[isExist].count > 1) {
        const newProduct = {
          ...newVehicleStore[isExist],
          count: newVehicleStore[isExist].count - 1,
        };
        state.vehicleStore.splice(isExist, 1, newProduct);
      } else {
        state.vehicleStore.splice(isExist, 1);
      }
    },
    remove: (state, action) => {
      const product = action.payload;
      const isExist = state.vehicleStore.findIndex(
        (item) => item.id === product.id
      );
      if (isExist !== -1) {
        state.vehicleStore.splice(isExist, 1);
      }
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  addtocart,
} = cartSlice.actions;
export default cartSlice.reducer;

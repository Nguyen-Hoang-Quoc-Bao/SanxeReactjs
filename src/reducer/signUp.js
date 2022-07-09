import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listSignup: [],
};

export const signUp = createSlice({
  name: "signup",
  initialState,
  reducers: {
    addAccount: (state, action) => {
      const account = action.payload;
      const isAccount = state.listSignup.findIndex(
        (item) => item.id === account.id
      );
      let newListSignup = [...state.listSignup];
      if (isAccount !== -1) {
        const newProduct = {
          ...newListSignup[isAccount],
          count: newVehicleStore[isAccount].count + 1,
        };
      }
    },
  },
});

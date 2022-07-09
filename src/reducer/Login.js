import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listUser: [
    {
      username: "1",
      password: "1",
      name: "locphuho",
      image:
        "https://phunugioi.com/wp-content/uploads/2020/01/anh-avatar-supreme-dep-lam-dai-dien-facebook.jpg",
    },
  ],
  userActive: null, // lưu cái thằng đã login vào
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.userActive = action.payload;
    },
    logout: (state, action) => {
      console.log(state);
      state.userActive = null;
      var removeuser = {
        user: localStorage.removeItem("user"),
        password: localStorage.removeItem("password"),
      };
    },
  },
});
export default user.reducer;

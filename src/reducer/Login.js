import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listUser: [
    {
      username: "1",
      password: "1",
      name: "locphuho",
      email: "anhnongdan12@gmail.com",
      image:
        "https://phunugioi.com/wp-content/uploads/2020/01/anh-avatar-supreme-dep-lam-dai-dien-facebook.jpg",
    },
  ],
  userActive: null, // lưu cái thằng đã login vào
  suCessSignUp: false, //ẩn signup đi
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.userActive = action.payload;
    },
    logout: (state, action) => {
      state.userActive = null;
      localStorage.removeItem("user");
      localStorage.removeItem("password");
    },
    addAccount: (state, action) => {
      const account = action.payload;
      const isAccount = state.listUser.findIndex(
        (item) => item.username === account.username
      );
      if (isAccount === -1) {
        state.listUser.push(account);
        state.suCessSignUp = true;
        alert("Đăng ký thành công");
      } else {
        alert("Tài khoản đã tồn tại");
      }
    },
    clearReducer: (state, action) => {
      state.suCessSignUp = false;
    },
  },
});
export default user.reducer;

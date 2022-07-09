import React, { useState } from "react";
import {
  AiFillLock,
  AiFillUnlock,
  AiOutlineClose,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";
import PropTypes from "prop-types";
import "./Signup.css";
import { useDispatch } from "react-redux";

const SingUp = (props) => {
  const { activeSignup, onClickHideSignup } = props;
  const dispatch = useDispatch();
  const handleClose = () => {
    onClickHideSignup(false);
  };
  const handleSignup = () => {
    dispatch({
      type: "signup/addAccount",
      payload: item,
    });
  };
  return (
    <div className={`formsignup ${activeSignup ? "active" : null}`}>
      <div className="container-signup">
        <div className="form-content">
          <div className="form-sign-up">
            <AiOutlineClose
              className="btn-close"
              onClick={() => handleClose()}
            />
            <h2>signup here</h2>
            <div className="css-icon">
              <div className="icon">
                <AiOutlineUser></AiOutlineUser>
              </div>
              <input type="email" placeholder="Nhập tên đăng ký" />
            </div>
            <div className="css-icon">
              <div className="icon">
                <AiOutlineMail></AiOutlineMail>
              </div>
              <input type="email" placeholder="Nhập tên email đăng ký" />
            </div>
            <div className="css-icon">
              <div className="icon">
                <AiFillUnlock></AiFillUnlock>
              </div>
              <input type="password" placeholder="Nhập mật khẩu đăng ký" />
            </div>
            <div className="css-icon">
              <div className="icon">
                <AiFillLock></AiFillLock>
              </div>
              <input type="password" placeholder="Xác nhận lại mật khẩu " />
            </div>
            <button type="submit" className="signup-btn">
              Đăng ký
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
SingUp.propTypes = {
  activeLogin: PropTypes.bool,
  onClickHideSignup: PropTypes.func,
};
export default SingUp;

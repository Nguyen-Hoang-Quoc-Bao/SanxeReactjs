import React, { useEffect, useState } from "react";
import {
  AiFillLock,
  AiFillUnlock,
  AiOutlineClose,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";
import PropTypes from "prop-types";
import "./Signup.css";
import { useDispatch, useSelector } from "react-redux";

const SingUp = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const { activeSignup, onClickHideSignup } = props;

  const handleClose = () => {
    onClickHideSignup(false);
    setEmail("");
    setPassword("");
    setUsername("");
    setPasswordAgain("");
  };
  const dispatch = useDispatch();
  const handleAddAccount = () => {
    if (password === passwordAgain) {
      dispatch({
        type: "user/addAccount",
        payload: {
          username: username,
          email: email,
          password: password,
        },
      });
    } else {
      alert("Xác nhận mật khẩu sai");
    }
  };
  const suCessSignUp = useSelector((state) => state.user.suCessSignUp);
  useEffect(() => {
    if (suCessSignUp) {
      handleClose();
    }
  }, [suCessSignUp]);

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
              <input
                type="email"
                placeholder="Nhập tên đăng ký"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="css-icon">
              <div className="icon">
                <AiOutlineMail></AiOutlineMail>
              </div>
              <input
                type="email"
                placeholder="Nhập tên email đăng ký"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="css-icon">
              <div className="icon">
                <AiFillUnlock></AiFillUnlock>
              </div>
              <input
                type="password"
                placeholder="Nhập mật khẩu đăng ký"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="css-icon">
              <div className="icon">
                <AiFillLock></AiFillLock>
              </div>
              <input
                type="password"
                placeholder="Xác nhận lại mật khẩu "
                value={passwordAgain}
                onChange={(e) => setPasswordAgain(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="signup-btn"
              onClick={() => handleAddAccount()}
            >
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

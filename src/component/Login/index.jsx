import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight, AiOutlineClose } from "react-icons/ai";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import SingUp from "../SignUp";

const Login = (props) => {
  const { activeLogin, onClickHideLogin } = props;
  const suCessSignUp = useSelector((state) => state.user.suCessSignUp);

  const handleClose = () => {
    onClickHideLogin(false);
    setUsername("");
    setPassword("");
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const listUser = useSelector((state) => state.user.listUser);
  const dispatch = useDispatch();

  const handleLogin = () => {
    const loginAccount = listUser.filter(
      (item) => item.username === username && item.password === password
    );

    if (loginAccount.length !== 0) {
      dispatch({
        type: "user/userLogin",
        payload: loginAccount[0],
      });
      handleClose(false);
      localStorage.setItem("user", JSON.stringify(loginAccount[0]));
    } else {
      alert("Sai tài khoản hoặc mật khẩu");
    }
  };

  const [activeSignup, setActiveSignup] = useState(false);
  const handleOnClick = () => {
    setActiveSignup(true);
    onClickHideLogin(false);
  };
  const onClickHideSignup = (value) => {
    setActiveSignup(value);
  };

  useEffect(() => {
    if (suCessSignUp) {
      setActiveSignup(false);
      dispatch({
        type: "user/clearReducer",
      });
    }
  }, [suCessSignUp]);
  return (
    <>
      <div className={`formlogin ${activeLogin ? "active" : null}`}>
        <div className="container-login">
          <div className="form-content">
            <div className="form-login">
              <AiOutlineClose
                className="btn-close"
                onClick={() => handleClose()}
              />
              <h1>Đăng nhập</h1>
              <input
                type="email"
                placeholder="Nhập Tên đăng nhập"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <a href="#/" className="forget-pass color">
                Quên mật khẩu ?
              </a>
              <button
                type="submit"
                className="login-btn"
                onClick={() => handleLogin()}
              >
                Đăng nhập
              </button>
              <div className="jssignup p-css">
                Bạn chưa có tài khoản?
                <AiOutlineArrowRight
                  style={{ margin: "0px 5px" }}
                ></AiOutlineArrowRight>
                <button
                  className="btn-outline btn-signup"
                  onClick={() => handleOnClick()}
                >
                  Đăng ký ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SingUp
        activeSignup={activeSignup}
        onClickHideSignup={() => onClickHideSignup()}
      ></SingUp>
    </>
  );
};

Login.propTypes = {
  activeLogin: PropTypes.bool,
  onClickHideLogin: PropTypes.func,
};
export default Login;

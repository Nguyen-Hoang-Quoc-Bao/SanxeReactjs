import React, { useEffect, useState } from "react";
import "./Header.css";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineMenu,
} from "react-icons/ai";
import imglogo from "../../img/logo-home.png";
import { Link } from "react-router-dom";
import Login from "../Login";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../../Cart";
const Header = () => {
  const [activeLogin, setActiveLogin] = useState(false);
  const topMenu = ["Câu hỏi thường gặp", "Góp ý"];
  // moblie-menu
  const showMenu = () => {
    const header = document.getElementById("header");
    const mobileMenu = document.getElementById("show_menu");
    const headerHeight = header.clientHeight;
    mobileMenu.onclick = function() {
      const isOpen = header.clientHeight === 60;
      if (isOpen) {
        header.style.height = "auto";
      } else {
        header.style.height = "60px";
      }
    };
  };
  //login

  const handleOnClick = () => {
    setActiveLogin(true);
  };

  const onClickHideLogin = (value) => {
    setActiveLogin(value);
  };
  const account = useSelector((state) => state.user.userActive);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch({
      type: "user/logout",
    });
  };
  var getuser = {
    user: localStorage.getItem("user"),
    password: localStorage.getItem("password"),
  };

  //cart
  const [activeCart, setActiveCart] = useState(false);
  const cartOnClick = () => {
    setActiveCart(true);
  };

  const onClickHideCart = (value) => {
    setActiveCart(value);
  };

  return (
    <>
      <div className="header" id="header">
        <div id="show_menu" onClick={() => showMenu()}>
          <AiOutlineMenu className="icon-menu"></AiOutlineMenu>
        </div>
        <div className="header-top">
          <div className="header-top-logo">
            <Link to="/">
              <img src={imglogo} alt="" />
            </Link>
          </div>
          <ul className="header-top--ul">
            <li>
              <Link to="/Idea" className="idea-guest">
                Thăm dò ý kiến khách hàng{" "}
              </Link>
            </li>
            {topMenu.map((item, index) => (
              <li key={index}>
                <Link to="#/">{item}</Link>
              </li>
            ))}

            {account ? (
              <div className="showavatar">
                {account.image ? (
                  <img src={account.image} alt="" className="css-avatart"></img>
                ) : (
                  <span className="username">{account.username}</span>
                )}
                <div className="exit" onClick={() => handleLogOut()}>
                  Đăng xuất
                </div>
              </div>
            ) : (
              <div className="login" onClick={() => handleOnClick()}>
                ĐĂNG NHẬP
              </div>
            )}
          </ul>
        </div>

        <div className="header-bot">
          <ul>
            <li className="level-1">
              <Link to="/PageProduct"> sản phẩm</Link>
              <ul className="header-bot-level-2">
                <li>
                  <a href="#/"> Yamaha</a>
                </li>
                <li>
                  <a href="#/"> Honda</a>
                </li>
              </ul>
            </li>
            <Link to="/Promotion" className="header-bot-KM">
              khuyến mãi
            </Link>
            <Link to="/News" className="header-bot-KM">
              Tin Tức
            </Link>
            <Link to="/Service" className="header-bot-KM">
              Dịch Vụ
            </Link>
            <Link to="/AboutUs" className="header-bot-KM">
              về chúng tôi
            </Link>

            <li>
              <div className="cart" onClick={() => cartOnClick()}>
                <AiOutlineShoppingCart>
                  {/* {listCard.map((item,index)=> (
              {item.length}
            ))} */}
                </AiOutlineShoppingCart>
              </div>
            </li>
            <li>
              <a href="#" className="search">
                <AiOutlineSearch></AiOutlineSearch>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Login
        activeLogin={activeLogin}
        onClickHideLogin={() => onClickHideLogin()}
      />
      <Cart
        activeCart={activeCart}
        onClickHideCart={() => onClickHideCart()}
      ></Cart>
    </>
  );
};

export default Header;

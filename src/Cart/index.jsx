import React from "react";
import { AiFillDelete, AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import "./Cart.css";
const Cart = (props) => {
  const listCard = useSelector((state) => state.cart.vehicleStore);
  const { activeCart, onClickHideCart } = props;
  const handleClose = () => {
    onClickHideCart(false);
  };
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch({
      type: "cart/addtocart",
      payload: item,
    });
  };
  const handleDevideCart = (item) => {
    dispatch({
      type: "cart/decrement",
      payload: item,
    });
  };
  const handleRemoveCart = (item) => {
    dispatch({
      type: "cart/remove",
      payload: item,
    });
  };
  //TOTAL
  const total = listCard.reduce((preValue, curretValue) => {
    return preValue + curretValue.price * curretValue.count;
  }, 0);

  const convertPrice = (value) => {
    const valueFormat = new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "VND",
    }).format(value);
    return <div className="currency">{valueFormat}</div>;
  };

  return (
    <div className={`formcart ${activeCart ? "active" : null}`}>
      <div className="container-cart">
        <div className="form-content">
          <div className="form-cart">
            <div className="button-close">
              <AiOutlineClose
                className="btn-close"
                onClick={() => handleClose()}
              />
              {listCard.map((item, index) => {
                return (
                  <div className="form-products">
                    <img src={item.img} alt="" />
                    <h2>{item.name}</h2>
                    <button
                      className="btn-outline"
                      onClick={() => handleDevideCart(item)}
                    >
                      -
                    </button>
                    <span style={{ border: "1px solid", padding: "6px 30px" }}>
                      {item.count}
                    </span>
                    <button
                      className="btn-outline"
                      onClick={() => handleAddToCart(item)}
                    >
                      +
                    </button>
                    <button
                      className="btn-outline btn-delete"
                      onClick={() => handleRemoveCart(item)}
                    >
                      <AiFillDelete></AiFillDelete>
                    </button>
                    <h3 style={{ width: "15%", "font-size": "17px" }}>
                      {convertPrice(item.price * item.count)}
                    </h3>
                  </div>
                );
              })}
              <div className="total-money">
                <h3>Total: {convertPrice(total)}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Cart.propTypes = {
  activeCart: PropTypes.bool,
  onClickHideCart: PropTypes.func,
};
export default Cart;

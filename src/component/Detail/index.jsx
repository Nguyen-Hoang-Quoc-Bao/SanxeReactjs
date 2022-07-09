import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

// import useNavigate from 'react'
import PropTypes from "prop-types";
import { useParams } from "react-router";
import "./Detail.css";
import { useDispatch } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Detail = (props) => {
  const { arrProduct } = props;
  const { id } = useParams();
  const array = arrProduct.filter((item) => item.id === +id);

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch({
      type: "cart/addtocart",
      payload: {
        ...array[0],
        count: 1,
      },
    });
  };
  //TOTAL
  const convertPrice = (value) => {
    const valueFormat = new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "VND",
    }).format(value);
    return (
      <div className="currency" style={{ "text-transform": "capitalize" }}>
        Giá bán lẻ đề xuất: {valueFormat}
      </div>
    );
  };

  return (
    <div className="Detail-all">
      <div className="link">
        <Link to="/" className="link-name">
          Trang chủ
        </Link>
        <IoIosArrowForward></IoIosArrowForward>
        <Link to="/Pageproduct" className="link-name">
          Sản Phẩm
        </Link>
      </div>
      {array.map((item, index) => (
        <div className="">
          <div className="Detail">
            <div className="detail-left">
              <img src={item.img} alt="" />
              <p key={index}>{item.des}</p>
            </div>
            <div className="detail-right">
              <div className="detail-right-top">
                <h1>{item.name}</h1>
                <h2>{convertPrice(item.price)}</h2>
              </div>
              <div className="detail-right-img">
                {item.imgDetail.map((item, index) => (
                  <img key={index} src={item} alt=""></img>
                ))}
              </div>
              <div className="btn-flex">
                <button
                  className="btn-cart btn-outline"
                  onClick={() => handleAddToCart()}
                >
                  <AiOutlineShoppingCart
                    style={{ "font-size": "16px", "margin-right": "5px" }}
                  ></AiOutlineShoppingCart>
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
          <div className="table-parent">
            <div className="Detail-container">
              <h1>Thông số kĩ thuật</h1>
              <div className="table-container">
                <div className="table-child-container">
                  <div className="table-item">
                    <div className="table-title">Khối lượng bản thân</div>
                    <div className="infor">{item.thongSo.khoiluong}</div>
                  </div>
                  <div className="table-item table-gray">
                    <div className="table-title">Dài x Rộng x Cao</div>
                    <div className="infor">{item.thongSo.dairongcao}</div>
                  </div>
                  <div className="table-item">
                    <div className="table-title">Khoảng cách trục bánh xe</div>
                    <div className="infor">
                      {item.thongSo.Khoangcachtrucbanhxe}
                    </div>
                  </div>
                  <div className="table-item table-gray">
                    <div className="table-title">Dung tích bình xăng</div>
                    <div className="infor">{item.thongSo.Dungtichbinhxang}</div>
                  </div>
                  <div className="table-item">
                    <div className="table-title">Kích cỡ lớp trước/ sau</div>
                    <div className="infor">
                      {item.thongSo.Kichcoloptruocsau}
                    </div>
                  </div>
                  <div className="table-item table-gray">
                    <div className="table-title">Mức tiêu thụ nhiên liệu</div>
                    <div className="infor">
                      {item.thongSo.Muctieuthunhienlieu}
                    </div>
                  </div>
                  <div className="table-item">
                    <div className="table-title">Moment cực đại</div>
                    <div className="infor">{item.thongSo.Momentcucdai}</div>
                  </div>
                  <div className="table-item table-gray">
                    <div className="table-title">Dung tích nhớt máy</div>
                    <div className="infor">{item.thongSo.Dungtichnhotmay}</div>
                  </div>
                  <div className="table-item">
                    <div className="table-title">Hộp số</div>
                    <div className="infor">{item.thongSo.Hopso}</div>
                  </div>
                  <div className="table-item table-gray">
                    <div className="table-title">Dung tích xy-lanh</div>
                    <div className="infor">{item.thongSo.Dungtichxylanh}</div>
                  </div>
                </div>
              </div>
              <h1>Thư Viện</h1>
              <div className="libary">
                <div className="libary-child">
                  {item.imgLibary.map((item, index) => (
                    <img key={index} src={item} alt="" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
Detail.propTypes = {
  arrProduct: PropTypes.array,
};
export default Detail;

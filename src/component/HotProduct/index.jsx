import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'
import './HotProduct.css'

const HotProduct = (props) => {
    
    const {arrProduct} = props;
    let navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/detail/${id}`) 
    }
    const convertPrice = (value) => {
        const valueFormat = new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'VND' }).format(value);
        return(
            <div className="currency">Giá bán lẻ: {valueFormat}</div>
        )
    }

    return (
        <div className="hot-product">
            {arrProduct.slice(0,3).map((item, index) => (
                <div key={index} className="hot-product">
                    <div className="hot-product-item" onClick={ () => handleClick(item.id)}>
                        <div className="hot-product-des" >
                            <h1>{item.name}</h1>
                            <h2> {convertPrice(item.price)}</h2>
                            <p>{item.des}</p>
                        </div>
                        <img src={item.img} alt='' />
                    </div>
                </div>
            ))}
        </div>
    )
}
HotProduct.propTypes = {
    arrProduct: PropTypes.array
}
export default HotProduct;
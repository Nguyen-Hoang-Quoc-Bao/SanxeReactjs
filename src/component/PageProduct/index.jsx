import React, { useEffect } from "react";
import './PageProduct.css'
import PropTypes from 'prop-types'
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const PageProduct = (props) => {

    const { arrProduct } = props;
    let navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/detail/${id}`) 
    }

    const [array, setArray] = useState(arrProduct)
    const HandleAddProduct = () =>{
        const newArray = [...array, ...arrProduct]
        setArray(newArray)
    }

    // useEffect(() => {
    //         setInterval(() => {
    //         const newArray = [...array, ...arrProduct]
    //         setArray(newArray)
    //     }, 3000);
    //     }, [array])
        
    
    return (
        <div className="pageproduct">
            <div className="child-page">    
            <div className="product">
                {array.map((item, index) => (
                    <div key={index} className="childproduct">
                        {/* image-after */}
                        <div className="image-product">
                            <img src={item.img} alt="" />
                           <Button className="btn-product" onClick={ () => handleClick(item.id)}>Xem Chi Tiết</Button>
                        </div>
                         {/* image-after */}
                        <h1>{item.name}</h1>
                        <p>{item.price}</p>
                        <div className="button1">
                           <button type="submit" onClick={ () => handleClick(item.id)}>XEM CHI TIẾT</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="btn-usestate">
                    <button onClick={HandleAddProduct}>Xem Thêm</button>
            </div>
            </div>
        </div>
    )
}
PageProduct.propTypes = {
    arrProduct: PropTypes.array
}

export default PageProduct;
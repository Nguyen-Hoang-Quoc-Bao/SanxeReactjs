import React from "react";
import Slider from '../Slider'
import './PageProduct.css'
import Header from "../Header";
import Footer from "../Footer";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'

const PageProduct = (props) => {

    const { arrProduct } = props
 
    let navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/detail/${id}`) 
    }

    return (
        <div className="pageproduct">
            <Header />
            <Slider />
            <div className="child-page">    
            <div className="product">
                {arrProduct.map((item, index) => (
                    <div key={index} className="childproduct">
                        <div className="image-product">
                            <img src={item.img} alt="" />
                            <Button className="btn-product" onClick={() => handleClick(item.id)}>XEM CHI TIÉT</Button>
                        </div>
                        <h1>{item.name}</h1>
                        <p>{item.price}</p>
                        <div className="button">
                            <button >XEM CHI TIẾT</button>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
            </div>
        </div>
    )
}
PageProduct.propTypes = {
    arrProduct: PropTypes.array
}
export default PageProduct;
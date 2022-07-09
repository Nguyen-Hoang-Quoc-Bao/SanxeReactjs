import React from 'react'
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'
import './New-product.css'
const NewProduct = (props) => {
    const {arrProduct} = props
    const arrimg = [...arrProduct]
  
    let navigate = useNavigate();
    const HandleClick = (id) => {
        navigate(`/detail/${id}`)
    }
    return (
        <div className="container_img" >
            {arrimg.slice(5,8).map((item, index) => (
                <a key={index} onClick={ () => HandleClick(item.id)} className='background-a'>
                    <img src={item.img} alt="" /></a>
            ))}
        </div>
    )
}
NewProduct.propTypes={
    arrProduct: PropTypes.array
}

export default NewProduct
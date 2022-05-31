import React from 'react'
import img2 from '../../img/r15-chinh.jpg'
import img from '../../img/winnerxx.jpg'
import img1 from '../../img/sirius2.jpg'
import './New-product.css'
const NewProduct = () => {
    const arrimg = [
        {
            img: img2,
        },
        {
            img: img,
        },
        { img: img1, }
    ]
    return (
        <div className="container_img">
            {arrimg.map((item, index) => (
                <a key={index} href="#/">
                    <img src={item.img} alt="" /></a>
            ))}


        </div>
    )
}

export default NewProduct
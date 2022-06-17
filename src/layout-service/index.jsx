import React from "react";
import './layoutService.css'
import Img from '../img/img-service.jpg'
import Img1 from '../img/Service1.png'
import Img2 from '../img/service2.png'
import Img3 from '../img/service3.png'
import Img4 from '../img/service4.png'
const Service = () => {
   
    return(
        <div className="service-list">
            <h1>DỊCH VỤ</h1>
            <img src={Img} alt="" />
        
            <div className="service-img">
                <div className="service__layout-item reveal-item img-1"> 
                <img src={Img1} alt="" />
                </div>
                <div className="service__layout-item reveal-item img-2">
                <img src={Img2} alt="" />
                </div>
                <div className="service__layout-item reveal-item img-3">
                <img src={Img3} alt="" />
                </div>
                <div className="service__layout-item reveal-item img-4">
                <img src={Img4} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Service;
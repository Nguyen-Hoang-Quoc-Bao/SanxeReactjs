import React from "react";
import './Service.css'
import Img1 from '../../img/Service1.png'
import Img2 from '../../img/service2.png'
import Img3 from '../../img/service3.png'
import Img4 from '../../img/service4.png'
const ListService = () => {
    const arrService = [{
        img1: Img1,
        img2: Img2,
        img3: Img3,
        img4: Img4
    }]
    return (
        <div className="list-service">
            {arrService.map((item, index) => (
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
            ))}

        </div>
    )
}
export default ListService
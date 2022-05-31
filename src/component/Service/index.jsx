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
                <div key={index} className="services">
                    <img src={item.img1} alt="" />
                    <div className="top-bot"><div className="service-top">
                        <img src={item.img2} alt="" />
                        <img src={item.img3} alt="" />
                    </div>
                        <div className="service-bot">
                            <img src={item.img4} alt="" />
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}
export default ListService
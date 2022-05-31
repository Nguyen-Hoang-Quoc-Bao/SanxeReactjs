import React from "react";
import './hot-product.css'
import Img from '../../img/môtbike.png'
import Img2 from '../../img/r15-chinh.jpg'
import Img3 from '../../img/sirius2.jpg'
const Hot_product = () => {

    const arrProduct = [{
        name: 'CBR1000RR-R Fireblade',
        buy: 'Lượt mua: 12011',
        des: 'Honda Việt Nam thực hiện chiến dịch triệu hồi sản phẩm xe máy phân khối lớn Honda CBR1000RR-R Fireblade.',
        img: Img
    },
    {
        name: 'Winner X',
        buy: 'Lượt mua: 11352',
        des: 'Lấy cảm hứng từ phong cách của những chiếc xe đua thể thao đậm chất Honda, WINNER X bổ sung Phiên bản giới hạn với tem và màu mới thêm lựa chọn thể hiện chất riêng của người lái.',
        img: Img2
    },
    {
        name: 'CBR650R 2021',
        buy: 'Lượt mua: 10412',
        des: 'Được lấy trực tiếp từ phong cách thể thao của Fireblade, CBR650R đã mài giũa DNA đường đua của mình cho hiệu suất đường trường tích cực. Vị trí gác để chân và tay lái tạo cho người sử dụng một tư thế lái tối ưu để dễ dàng quản lý việc tăng tốc.',
        img: Img3
    }
    ]

    return (
        <div className="hot-product">
            {arrProduct.map((item, index) => (
                <div key={index} className="hot-product">
                    <div className="hot-product-item">
                        <div className="hot-product-des">
                            <h1>{item.name}</h1>
                            <h2>{item.buy}</h2>
                            <p>{item.des}</p>
                        </div>
                        <img src={item.img} alt='' />
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Hot_product;
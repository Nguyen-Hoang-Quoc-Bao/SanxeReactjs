import React from "react";
import Img from '../img/Khuyen Mai.webp'
import './promotion.css'
const arrKM = [
    {   
        Img: Img,
        title:'Công ty TNHH Yamaha Motor xin trân trọng thông báo chương trình khuyến mại dành cho khách hàng đăng ký xe trên ứng dụng My Yamaha Motor.',
    }
]
const Infor = ['1. Tên Chương trình khuyến mại: ĐĂNG KÝ XE - NHẬN NGAY QUÀ TẶNG',
            '2. Thời gian khuyến mại: từ 01/06/2022 đến 31/07/2022',
            '3. Hàng hóa, dịch vụ được khuyến mại: ứng dụng My Yamaha Motor, ứng dụng được phát hành bởi Công ty Yamaha Motor trên “Apple Store” (iOS) và “Google Play” (Android).',
            '4. Địa bàn (phạm vi) khuyến mại: Toàn quốc',
            '5. Hàng hóa, dịch vụ dùng để khuyến mại:',
            '- 10 điện thoại Samsung Galaxy A23 4GB 128GB đen (A235)',
            '- 1.000 Thẻ nạp điện thoại trị giá 100.000 VND vào tài khoản điện thoại',
            '- 3.000 Thẻ nạp điện thoại trị giá 50.000 VND vào tài khoản điện thoại',
            '6. Hình thức khuyến mại:',
            '- Khách hàng đang sử dụng xe máy nhãn hiệu Yamaha và đăng ký lần đầu xe máy nhãn hiệu Yamaha thành công trên ứng dụng My Yamaha Motor, ứng dụng được phát hành bởi Công ty Yamaha Motor trên “Apple Store” (iOS) và “Google Play” (Android) trong thời gian khuyến mại từ 01/06/2022 đến ngày 31/07/2022, sẽ có cơ hội tham gia mở hộp quà trực tuyến trên website để nhận giải thưởng cộng tiền vào tài khoản điện thoại hoặc điện thoại Samsung Galaxy A23 4GB 128GB đen (A235).',
            '7. Khách hàng của Chương trình khuyến mại (đối tượng được hưởng khuyến mại):',
            'Tất cả các khách hàng đủ các điều kiện sau:',
            '- Khách hàng đang sử dụng xe máy nhãn hiệu Yamaha và đăng ký lần đầu xe máy nhãn hiệu Yamaha thành công trên ứng dụng My Yamaha Motor, ứng dụng được phát hành bởi Công ty Yamaha Motor trên “Apple Store” (iOS) và “Google Play” (Android)',
            '8. Tổng giá trị giải thưởng: 10 điện thoại Samsung Galaxy A23 4GB 128GB đen (A235); 1.000 thẻ nạp tiền điện thoại được cộng vào tài khoản điện thoại mệnh giá 100.000 VND; 3.000 thẻ nạp tiền điện thoại được cộng vào tài khoản điện thoại mệnh giá 50.000 VND.',
]
const Khuyenmai = () => {
    return(
        <div className="promotion">
            {arrKM.map((item,index) => (
                <div key={index} className="promotionChild">
                <h2>{item.title}</h2>
                <img src={item.Img} alt='' />
                <div className="P-CSS">
                {Infor.map((item,index) => (  
                    <p>{item}</p>
                ))}
                    <p>Liên hệ <strong>hotline 1800.1588 </strong> hoặc đến ngay <strong>Yamaha Town gần nhất</strong> để biết thêm thông tin chi tiết.</p>
                </div>
                </div>
            ))}
        </div>
        )
}
export default Khuyenmai;
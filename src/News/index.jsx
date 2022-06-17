import React from "react";
import { useNavigate } from "react-router-dom";
import Img from '../img/img-new-1.webp'
import Img1 from '../img/img-new-1-1.webp'
import Img2 from '../img/img-new-1-2.webp'
import Img3 from '../img/img-new-1-3.webp'
import Img4 from '../img/img-new-1-4.webp'
import Img5 from '../img/img-new-1-5.webp'
import Img6 from '../img/img-new-1-6.webp'
import Img7 from '../img/img-new-2.webp'
import Img8 from '../img/img-new-2-1.webp'
import Img9 from '../img/img-new-2-2.webp'
import Img10 from '../img/img-new-2-3.webp'
import Img11 from '../img/img-new-2-4.webp'
import Img12 from '../img/img-new-3.webp'
import PropTypes from 'prop-types'
import './News.css'

// const arrNews= [
//     {
//         Img: Img,
//         title:'QUARTARARO VỚI TINH THẦN "CHIẾN CỰC CĂNG" CHIẾM TRỌN VỊ TRÍ THỨ 2 TRÊN BỤC PODIUM TẠI MUGELLO',
//         detail:'Fabio Quartararo của Monster Energy Yamaha MotoGP đã chiến đấu như một chú sư tử ngày hôm nay để giành vị trí thứ hai...'
//     },
//     {
//         Img: Img2,
//         title:'JANUS CAMPUS TOUR 2022: “CHÁY” HẾT MÌNH VỚI ĐẠI HỘI ÂM NHẠC SÔI ĐỘNG...',
//         detail:'Gen Z đã có những khoảng khắc vô cùng đáng nhớ với hai ngày diễn ra chương trình JANUS CAMPUS TOUR 2022 tại Đại...'
//     },
//     {
//         Img: Img3,
//         title:'JANUS CAMPUS TOUR 2022: "QUẨY" CỰC MẠNH CÙNG GENZ CẦN THƠ',
//         detail:'Janus Campus Tour đã chính thức cập bến Cần Thơ ngày 21-22/5 vừa qua, mang đến cho các bạn trẻ những hoạt động thú...'
//     },
// ]
const arrDetail = [
    {
        img: Img,
        id:1,
        title:'MOTOGP 2022: QUARTARARO VỚI TINH THẦN "CHIẾN CỰC CĂNG" CHIẾM TRỌN VỊ TRÍ THỨ 2 TRÊN BỤC PODIUM TẠI MUGELLO',
        detailFirst:'Fabio Quartararo của Monster Energy Yamaha MotoGP đã chiến đấu như một chú sư tử ngày hôm nay để giành vị trí thứ hai...',
        imgDetail: [Img1, Img2, Img3, Img4, Img5, Img6]
    },
    {
        img: Img7,
        id:2,
        title:'JANUS CAMPUS TOUR 2022: “CHÁY” HẾT MÌNH VỚI ĐẠI HỘI ÂM NHẠC SÔI ĐỘNG NHẤT ĐẠI HỌC NGOẠI THƯƠNG',
        detailFirst:'Gen Z đã có những khoảng khắc vô cùng đáng nhớ với hai ngày diễn ra chương trình JANUS CAMPUS TOUR 2022 tại Đại...',
        imgDetail: [Img8, Img9, Img10, Img11],
    },
    {
        img: Img12,
        id:3,
        title:'JANUS CAMPUS TOUR 2022: "QUẨY" CỰC MẠNH CÙNG GENZ CẦN THƠ',
        detailFirst:'Janus Campus Tour đã chính thức cập bến Cần Thơ ngày 21-22/5 vừa qua, mang đến cho các bạn trẻ những hoạt động thú...',
        imgDetail: [Img8, Img9, Img10, Img11],
    }
]

const News = () => {
    let navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/NewsDetail/${id}`) 
    }
    return(
        <div className="News">
            {arrDetail.map((item,index) => (
                <div key={index} className="News-title">
                <img src={item.img} alt='' />
                <div className="News-detail">
                    <h2>{item.title}</h2>
                    <p>{item.detailFirst}</p>
                    <button type="submit" onClick={() => handleClick(item.id)}>Xem Thêm</button>
                </div>
                </div>
            ))}
        </div>
    )
}
arrDetail.propTypes={
    arrDetail: PropTypes.array
}
export default News;
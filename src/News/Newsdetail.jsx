import React from "react";
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
import Img13 from '../img/img-new-3-1.webp'
import Img14 from '../img/img-new-3-2.webp'
import Img15 from '../img/img-new-3-3.webp'
import Img16 from '../img/img-new-3-4.webp'
import Img17 from '../img/img-new-3-5.webp'
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types'
import './News.css'
const arrDetail = [
    {
        img: Img,
        id:1,
        title:'MOTOGP 2022: QUARTARARO VỚI TINH THẦN "CHIẾN CỰC CĂNG" CHIẾM TRỌN VỊ TRÍ THỨ 2 TRÊN BỤC PODIUM TẠI MUGELLO',
        detailFirst:'Fabio Quartararo của Monster Energy Yamaha MotoGP đã chiến đấu như một chú sư tử ngày hôm nay để giành vị trí thứ hai xuất sắc tại Gran Premio d’Italia Oakley. Kết quả đã kéo dài vị trí dẫn đầu chức vô địch của anh thêm 4 điểm lên 8 điểm tổng cộng. Franco Morbidelli cũng thể hiện tinh thần chiến đấu trong cuộc đua trên sân nhà của anh và đồng đội. Hoàn thành vòng mở màn ở vị trí thứ 24, anh đã vươn lên vị trí thứ 17, cách vị trí đầu tiên 20,296 giây.',
        detailSecond:'Xuất phát từ P6, tay đua Fabio Quartararo của Yamaha đã thực hiện những bước đi quyết đoán trước khi thẳng tiến vượt qua vị trí tạm dẫn đầu là Ducati VR46 của Luca Marini và Marco Bezzecchi cũng như Fabio Di Giannantonio trên chiếc Gresini Ducati.',
        imgDetail: [Img1, Img2, Img3, Img4, Img5, Img6]
    },
    {
        img: Img7,
        id:2,
        title:'JANUS CAMPUS TOUR 2022: “CHÁY” HẾT MÌNH VỚI ĐẠI HỘI ÂM NHẠC SÔI ĐỘNG NHẤT ĐẠI HỌC NGOẠI THƯƠNG',
        detailFirst:'Gen Z đã có những khoảng khắc vô cùng đáng nhớ với hai ngày diễn ra chương trình JANUS CAMPUS TOUR 2022 tại Đại học Ngoại thương (27, 28-5).  Mặc dù thời tiết không chiều lòng người, nhưng các bạn trẻ vẫn “quẩy” hết mình tại Đại hội âm nhạc, thỏa sức bùng nổ năng lượng Đẹp Độc Đỉnh.',
        detailSecond:'Hai ngày vừa qua, các bạn sinh viên Đại học Ngoại Thương Hà Nội đã được trải nghiệm những hoạt động hấp dẫn như trải nghiệm các dòng xe của Yamaha, chơi nhạc cụ của Yamaha Music, tham gia các trò chơi và nhận được những phần quà cực xinh. Bên cạnh đấy, hai cuộc thi Miss Janus là Miss Melody và Miss Beauty.',
        imgDetail: [Img8, Img9, Img10, Img11],
    },
    {
        img: Img12,
        id:3,
        title:'JANUS CAMPUS TOUR 2022: ‘QUẨY’ CỰC MẠNH CÙNG GENZ CẦN THƠ',
        detailFirst:'Là điểm đến tiếp theo trong chuỗi sự kiện JANUS CAMPUS TOUR 2022, Yamaha mang tới các bạn Cần Thơ hàng loạt các hoạt động cực chất và nhiều phần quà hấp dẫn. Hàng trăm các bạn sinh viên đã đến tham gia tại Quảng trường Công viên Sông Hậu, Phường Cái Khế, Quận Ninh Kiều, Cần Thơ để trải nghiệm và check-in cùng xe Yamaha Janus hoàn toàn mới, tham gia cuộc thi Miss Janus và nhận ngay cơ hội rinh loạt phần quà giá trị, chơi thả ga những trò chơi cực thú vị của Yamaha và đặc biệt là thưởng thức bữa tiệc âm nhạc hoàng tránh với nhiều ca sĩ nổi tiếng: Hoàng Dũng, Chi Dân, Juky San cùng DJ Justin James.',
        detailSecond:'Bên cạnh đó, hàng chục tiết mục biểu diễn từ các bạn sinh viên đến từ các trường đại học tại Cần Thơ đã khiến khán giả cực phấn khích và tự hào!Cùng xem lại những khoảnh khắc đáng nhớ tại sự kiện Janus Campus Tour Cần Thơ nhé:',
        imgDetail: [Img13, Img14, Img15, Img16, Img17],
    }

]
const NewsDetail = () => {
    const { id } = useParams()
    const array = arrDetail.filter(item=> (item.id === +id))
    return(
        <div className="">
            {array.map((item,index) => (
                <div key={index} className="newsdetail">
                    <div className="newdetailChild">
                <h1>{item.title}</h1>
                <p>{item.detailFirst}</p>
                <img src={item.img} alt=""/>
                <p>{item.detailSecond}</p>
                {item.imgDetail.map((item, index) => (
                    <img key={index} src={item} alt="" />
                ))}
                </div>
                </div>
            ))}
        </div>
    )
}
arrDetail.propTypes={
    arrDetail: PropTypes.array
}
export default NewsDetail
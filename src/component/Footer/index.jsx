import React from "react";
import './footer.css'
import Fb from '../../img/fb.png'
import Insta from '../../img/ico-instagram.png'
import YTube from '../../img/ico-youtube.png'
import Tiktok from '../../img/ico-tiktok.png'
const Footer = () => {
    const arrlink = [
        { img: Fb },
        { img: Insta },
        { img: YTube },
        { img: Tiktok },

    ]
    const arrinfor = ['CÔNG TY TNHH YAMAHA MOTOR VIỆT NAM', 'Số GCNĐKDN: 0100774342', 'Cấp lần đầu: Ngày 22/09/2008', 'Đăng ký thay đỗi lần thứ 10: Ngày 27/03/2020', 'Cơ quan cấp: Sở kế hoạch và đầu tư TP Hà Nội']
    const arrconnect = ['liên hệ', 'tìm kiếm', 'E-learing', 'About Us', 'câu hỏi thường gặp',]
    const arrphone = ['Phone: 0866776421', 'Email: 93quocbaondu1314@gmail.com']
    return (
        <div className="footer">
            <div className="footer-top">
                <fieldset>
                    <legend>Network</legend>
                    {arrlink.map((item, index) => (
                        <div key={index} className="footer-top-left">
                            <a href="#/"> <img src={item.img} alt='' /></a>
                        </div>
                    ))}
                </fieldset>
                <div className="footer-top-right">
                    <ul className="footer-ul">
                        {arrconnect.map((item, index) => (
                            <li key={index}><a href="#/">{item}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="footer-bot">
                <div className="footer-bot-left">
                    {arrinfor.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </div>
                <div className="footer-bot-right">
                    <h1>Thông Tin Liên Hệ</h1>
                    <div className="ul">
                        {arrphone.map((item, index) => (
                            <ul key={index}>
                                <li>{item}</li>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer

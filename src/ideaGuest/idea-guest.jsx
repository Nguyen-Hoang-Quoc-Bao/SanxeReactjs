import React from "react";
import './idea-guest.css'

const arroption =['1. Đỏ đậm','2. Đỏ tươi','3. Đen','4. Bạc','5. Trắng','6. Xanh dương',
                    '7. Cam','8. Vàng','9. Xám','10. Nâu','11. Khác (vui lòng nêu rõ)']
const arrIndex = [
    {
        generalInfor: 'Thông tin chung',
        content: 'Xin Quý khách hàng vui lòng cung cấp đầy đủ thông tin chủ xe để đảm bảo thuận tiện cho việc trao giải.',
        i11: '1.1 Tháng mua:',
        i12: 'Năm mua:',
        i13: '1.2 Nơi mua:',
        i131: '1. Cửa hàng do Honda ủy nhiệm (HEAD)',
        i132: ' 2. Cửa hàng bán xe thông thường (có thể bán nhiều loại xe của các hãng khác nhau)',
        i2: '2.Thông tin cửa hàng mua xe:',
        i21: 'Tên cửa hàng:',
        i22: 'Địa chỉ:',
        i31: '3.1 Thông tin cá nhân người mua xe:',
        i311: 'Họ tên:',
        i312: 'Số điện thoại:(viết liền, không dấu cách)',
        i32: '3.2 Tỉnh thành cư trú, Địa chỉ nhà:(vui lòng nhập chi tiết tới thông tin phường/quận/huyện)',
        i41: '4.1 Tên xe Quý vị vừa mua:',
        i42: '4.2 Màu sắc (Chỉ chọn 1 màu chủ yếu nhất trên xe, ghi tên màu đầu tiên nếu xe được ghi nhiều màu như' 
            +' trong đăng ký/ tờ rơi/ ca-ta-lô)',
        i43: '4.3 Phương thức mua xe:',
        i431: '1. Tiền mặt',
        i432: '2. Trả góp'
    }
]
const Idea = () => {
    return(
        <>
        {arrIndex.map((item,index) => (
    <div className="idea-page">
        <h1>{item.generalInfor}</h1>
        <h3>{item.content}</h3>
    <div className="idea-chose">
            <h3>{item.i11}</h3>
                <input className="btn-month" type={'number'} min={"1"} max={"12"} />
            <h3>{item.i12}</h3>
                <input className="btn-year" type={'number'} min={"2012"} max={"2022"} />
            <h3>{item.i13}</h3>
    <div className="where-to-buy">
        <div className="btn-where-buy"><input type={"checkbox"} /> 
                <label style={{margin: '4px'}}></label>{item.i131} </div>
        <div className="btn-where-buy"><input type={"checkbox"} /> 
                <label style={{margin: '4px'}}></label>{item.i132}</div>
            </div>
                <h3>{item.i2}</h3>
            <div className="store-to-buy">
                <p className="name-margin">{item.i21}</p>
                <input type="text" className="name-store" />
            </div>
            <div className="store-to-buy">
                <p className="name-margin">{item.i22}</p>
                <input type="text" className="name-store" />
            </div>
                <h3>{item.i31}</h3>
            <div className="store-to-buy">
                <p className="name-margin">{item.i311}</p>
                <input type="text" className="name-store" />
            </div>
            <div className="store-to-buy">
                <p className="name-margin">{item.i312}</p>
                <input type="tel" className="name-store" />
            </div>
                <h3>{item.i32}</h3>
                <input style={{width: '97%', 'font-size': '25px'}} type={'text'} />
                <h3>{item.i41}</h3>
            <input style={{width: '97%', 'font-size': '25px'}} type={'text'} />
                <h3>{item.i42}</h3>
            <div className="btn-color">
                {arroption.map((item, index) => (
                    <div className="btn-color-row">
                    <div className="btn-row-1"><input type={'checkbox'}/><label style={{'margin-left': '5px'}}>{item}</label></div>
                    </div>
                ))}
                <input type={'text'} style={{width: '40%', 'font-size': '22px'}}/>
            </div>
            <h3>{item.i43}</h3>
            <div className="where-to-buy">
        <div className="btn-where-buy"><input type={"checkbox"} /> 
                <label style={{margin: '4px',}}>{item.i431}</label> </div>
        <div className="btn-where-buy"><input type={"checkbox"} /> 
                <label style={{'margin-left': '5px'}}>{item.i432}</label></div>
        </div>
        <div className="btn-confirm">
                <button className="btn-outline">Xác nhận </button>
        </div>
        </div>
    </div>
    ))}
    </>
    )
}

export default Idea
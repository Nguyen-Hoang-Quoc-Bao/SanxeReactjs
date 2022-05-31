import React from 'react';
import { Routes, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import PageProduct from './component/PageProduct';
import img from './img/yzf.png'
import img2 from './img/exciter.png'
import img1 from './img/sirius1.png'
import img3 from './img/NVX.png'
function App() {
  const arrProduct = [
    {
        img: img,
        name: 'CBR1000RR-R Fireblade',
        price: 'Giá: 55.000.000 đ',
        des: 'Honda Việt Nam thực hiện chiến dịch triệu hồi sản phẩm xe máy phân khối lớn Honda CBR1000RR-R Fireblade.',
        id: 1,
    },
    {
        img: img1,
        name: 'SIRIUS BẢN RC',
        price: 'Giá: 18.700.000 đ',
        des: 'Lấy cảm hứng từ phong cách của những chiếc xe đua thể thao đậm chất Honda, WINNER X bổ sung Phiên bản giới hạn với tem và màu mới thêm lựa chọn thể hiện chất riêng của người lái.',

    },
    {
        img: img2,
        name: 'EXCITER 150VVA BẢN GIỚI HẠN',
        price: 'Giá: 35.000.000 đ',
        des: 'Được lấy trực tiếp từ phong cách thể thao của Fireblade, CBR650R đã mài giũa DNA đường đua của mình cho hiệu suất đường trường tích cực. Vị trí gác để chân và tay lái tạo cho người sử dụng một tư thế lái tối ưu để dễ dàng quản lý việc tăng tốc.',
    },
    {
        img: img3,
        name: ' 155 VVA ',
        price: 'Giá: 54.500.000 đ',
        des: 'Được lấy trực tiếp từ phong cách thể thao của Fireblade, CBR650R đã mài giũa DNA đường đua của mình cho hiệu suất đường trường tích cực. Vị trí gác để chân và tay lái tạo cho người sử dụng một tư thế lái tối ưu để dễ dàng quản lý việc tăng tốc.',
    }
];
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/PageProduct' element={<PageProduct arrProduct={arrProduct}/>} />
      </Routes>
    </div>
  )
}

export default App;

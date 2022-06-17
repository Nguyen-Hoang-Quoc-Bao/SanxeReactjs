import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import PageProduct from './component/PageProduct';
import img from './img/Africa twin-4.jpg'
import img1 from './img/Airblade.png'
import img2 from './img/winnerx.jpg'
import img3 from './img/blade.png'
import img4 from './img/exciter.png'
import img5 from './img/sirius1.png'
import img6 from './img/r15-chinh.jpg'
import img7 from './img/môtbike.png'
import AF1 from './img/Africa twin.jpg'
import AF2 from './img/Africa twin-1.jpg'
import AF3 from './img/Africa twin-2.jpg'
import AF4 from './img/Africa twin-3.jpg'
import AF5 from './img/Africa twin-5.jpg'
import AF6 from './img/Africa twin-6.jpg'
import AF7 from './img/Africa twin-7.jpg'
import AF8 from './img/Africa twin-8.jpg'
import Ab1 from './img/ab1.jpg'
import Ab2 from './img/ab2.jpg'
import Ab3 from './img/ab3.jpg'
import Ab4 from './img/ab4.jpg'
import Ab5 from './img/ab5.jpg'
import Ab6 from './img/ab6.jpg'
import Ab7 from './img/ab7.jpg'
import Ab8 from './img/ab8.jpg'
import WN1 from './img/winnerx-1.jpg'
import WN2 from './img/winnerx-2.jpg'
import WN3 from './img/winnerx-3.jpg'
import WN4 from './img/winnerx-4.jpg'
import WN5 from './img/winnerx-5.jpg'
import WN6 from './img/winnerx-6.jpg'
import WN7 from './img/winnerx-7.jpg'
import WN8 from './img/winnerx-8.jpg'
import WN9 from './img/winnerxx.jpg'
import Bl1 from './img/blade-1.png'
import Bl2 from './img/blade-2.png'
import Bl3 from './img/blade-3.png'
import Bl4 from './img/blade-4.png'
import Bl5 from './img/blade-5.png'
import Bl6 from './img/blade-6.png'
import Bl7 from './img/blade-7.png'
import Bl8 from './img/blade-8.png'
import EX1 from './img/exciter-1.png'
import EX2 from './img/exciter-2.png'
import EX3 from './img/exciter-3.png'
import EX4 from './img/exciter-4.png'
import EX5 from './img/exciter-5.png'
import EX6 from './img/exciter-6.png'
import EX7 from './img/exciter-7.png'
import EX8 from './img/exciter-8.png'
import EX9 from './img/exciter-9.png'
import SR1 from './img/sirius-1.jpg'
import SR2 from './img/sirius-2.jpg'
import SR3 from './img/sirius-3.jpg'
import SR4 from './img/sirius-4.jpg'
import SR5 from './img/sirius-5.jpg'
import SR6 from './img/sirius-6.jpg'
import SR7 from './img/sirius-7.jpg'
import SR8 from './img/sirius-8.jpg'
import R151 from './img/r15-1.jpg'
import R152 from './img/r15-2.jpg'
import R153 from './img/r15-3.jpg'
import R154 from './img/r15-4.jpg'
import R155 from './img/r15-5.jpg'
import R156 from './img/r15-6.jpg'
import R157 from './img/r15-7.jpg'
import R158 from './img/r15-8.jpg'
import CBR1 from './img/CBR-1.jpg'
import CBR2 from './img/CBR-2.jpg'
import CBR3 from './img/CBR-3.jpg'
import CBR4 from './img/CBR-4.jpg'
import CBR5 from './img/CBR-5jpg.png'
import CBR6 from './img/CBR-6.jpg'
import CBR7 from './img/CBR-7.jpg'
import CBR8 from './img/CBR-8.jpg'
import Header from './component/Header';
import Slider from './component/Slider';
import Detail from './component/Detail';
import Khuyenmai from './promotion';
import Footer from './component/Footer';
import News from './News';
import NewsDetail from './News/Newsdetail';
import Service from './layout-service';
import AboutUs from './AboutUs';
function App() {
  const arrProduct = [
    {
        img: img,
        name: 'Africa Twin Adventure Sport',
        price: 'Giá từ: 690.490.000 VNĐ',
        des: 'Đích đến mỗi cuộc hành trình là một bầu trời trong xanh, niềm đam mê phiêu lưu, khám phá những miền đất mới luôn là sự khao khát và là động lực để họ tiến bước, để rồi cuối mỗi chặng hành trình họ có thể ngồi tận hưởng vẻ đẹp của một bầu trời trong xanh trước mắt họ. Đó là lý do chúng tôi trang bị chiếc Africa Twin Adventure Sport với những công nghệ và tính năng tối tân nhất, sẵn sàng cùng bạn khám phá thế giới.',
        id: 1,
        imgDetail: [AF1, AF2, AF3, AF4],
        imgLibary: [AF5, AF6, AF7, AF8],
        thongSo: {
          khoiluong: '240kg',
          dairongcao: '2.330 mm x 960 mm x 1.617 mm',
          Khoangcachtrucbanhxe: '1.575 mm',
          Dungtichbinhxang:'24,8 lít',
          Kichcoloptruocsau:'Lốp trước: 90/90-21 Lốp sau: 150/70R18',
          Muctieuthunhienlieu:'4,75 lít/100km',
          Momentcucdai:'105Nm/ 6.250 vòng/ phút',
          Dungtichnhotmay:'3,9 lít khi thay nhớt  4,0 lít khi thay nhớt và bộ lọc  4,8 lít khi rã máy',
          Hopso:'6 cấp',
          Dungtichxylanh:'1084 cc'
        }
    },
    {
      id: 2,
        img: img1,
        name: 'Air Blade 125/160',
        price: 'Giá từ: 42.090.000 VNĐ',
        des: 'Xứng danh mẫu xe tay ga thể thao tầm trung hàng đầu trong suốt hơn một thập kỷ qua, AIR BLADE hoàn toàn mới nay được nâng cấp động cơ eSP+ 4 van độc quyền, tiên tiến nhất giúp mang trong mình mãnh lực tiên phong.',
        imgDetail: [Ab1, Ab2, Ab3, Ab4],
        imgLibary: [Ab5, Ab6, Ab7, Ab8],
        thongSo: {
          khoiluong: 'Air Blade 125: 113 kg - Air Blade 160: 114 kg',
          dairongcao: 'Air Blade 125:  1.887mm x  687m x 1.092 mm   Air Blade 160: 1.890 x 686 x 1.116 mm',
          Khoangcachtrucbanhxe: '1.286 mm',
          Dungtichbinhxang:'4,4 lít',
          Kichcoloptruocsau:'Air Blade 125: Lốp trước 80/90 - Lốp sau 90/90 --- Air Blade 160: Lốp trước 90/80 - Lốp sau 100/80',
          Muctieuthunhienlieu:'Air Blade 125: 2,26l/100km - Air Blade 160: 2,3l/100km',
          Momentcucdai:'Air Blade 125: 11,3Nm/6.500 vòng/phút - Air Blade 160: 14,6Nm/6.500 vòng/phút',
          Dungtichnhotmay:'0,8 lít khi thay nhớt - 0,9 lít khi rã máy',
          Hopso:'Vô cấp',
          Dungtichxylanh:'Air Blade 125: 124,8 cc - Air Blade 160: 156,9 cc'
        }
    },
    {
      id: 3,
        img: img2,
        name: 'Winner X',
        price: 'Giá từ: 46.160.000 VNĐ',
        des: 'Hãy tự tin tạo những cú kích để vút xa và tạo dấu ấn riêng biệt cùng Honda WINNER X mới. Đánh dấu sự chuyển mình mạnh mẽ hướng tới hình ảnh một mẫu xe thể thao hàng đầu tại Việt Nam trang bị hiện đại, tối tân, WINNER X mới sẽ cùng các tay lái bứt tốc trên mọi hành trình khám phá.',
         imgDetail: [WN1, WN2, WN3, WN4, WN5],
         imgLibary: [WN9, WN6, WN7, WN8],
         thongSo: {
          khoiluong: '122kg',
          dairongcao: '2.019 x 727 x 1.104 mm',
          Khoangcachtrucbanhxe: '1.278 mm',
          Dungtichbinhxang:'4,5 lít',
          Kichcoloptruocsau:'"Trước: 90/80-17M/C 46P - Sau: 120/70-17M/C 58P"',
          Muctieuthunhienlieu:'1,99l/100km',
          Momentcucdai:'Điện',
          Dungtichnhotmay:'"1,1 lít khi thay nhớt - 1,3 lít khi rã máy"',
          Hopso:'6 cấp',
          Dungtichxylanh:'149,1 cm3'
        }
      },
    {
      id: 4,
        img: img3,
        name: ' Blade 110 ',
        price: 'Giá từ: 18.841.091 VNĐ',
        des: 'Với tem xe mới, Blade mang một diện mạo đầy mạnh mẽ, khỏe khoắn, tạo nên phong cách thể thao và năng động cho người lái.',
        imgDetail: [Bl1, Bl2, Bl3, Bl4],
        imgLibary: [Bl5, Bl6, Bl7, Bl8],
        thongSo: {
          khoiluong: '99kg',
          dairongcao: '1.920 x 702 x 1.075 mm',
          Khoangcachtrucbanhxe: '1.217 mm',
          Dungtichbinhxang:'3,7 lít',
          Kichcoloptruocsau:'Trước: 70/90 -17 M/C 38P - Sau: 80/90 - 17 M/C 50P',
          Muctieuthunhienlieu:'1,85l/100km',
          Momentcucdai:'8,65 Nm/5.500 vòng/phút',
          Dungtichnhotmay:'0,8 lít sau khi thay nhớt - 1,0 lít sau khi rã máy',
          Hopso:'Cơ khí, 4 số tròn',
          Dungtichxylanh:'109,1 cm3'
        }
    },
    {
      id: 5,
        img: img4,
        name: 'EXCITER 155 VVA PHIÊN BẢN GIỚI HẠN',
        price: 'Giá từ: 51.690.000 VNĐ',
        des: 'Yamaha Motor Việt Nam vừa ra mắt phiên bản Exciter 155 VVA. Exciter 155 VVA được nâng cấp và thay đổi với nhiều chi tiết hoàn toàn mới dựa trên các công nghệ đang được áp dụng trên siêu xe thể thao YZF-R1, nhưng vẫn đảm bảo được tính ổn định và linh hoạt của 1 chiếc xe thể thao phân khối nhỏ.',
         imgDetail: [EX1, EX2, EX3, EX4, EX5],
         imgLibary: [EX6, EX7, EX8, EX9],
         thongSo: {
          khoiluong: '121 kg',
          dairongcao: '	1,975 mm x 665 mm x 1,085 mm',
          Khoangcachtrucbanhxe: '1.278 mm',
          Dungtichbinhxang:'5.4 lít',
          Kichcoloptruocsau:'"Trước: 90/80-17M/C 46P - Sau: 120/70-17M/C 58P"',
          Muctieuthunhienlieu:'2.09l/100km',
          Momentcucdai:'14.4 N・m (1.5 kgf・m) / 8,000 vòng/phút',
          Dungtichnhotmay:'1.1 L',
          Hopso:'5 cấp',
          Dungtichxylanh:'155 cc'
        }
      },
    {
      id: 6,
        img: img5,
        name: ' SIRIUS  ',
        price: 'Giá từ: 21.700.000 VNĐ',
        des: 'Yamaha Sirius là mẫu xe số bền bỉ đã có mặt tại thị trường Việt Nam từ hơn 20 năm trước. Cho đến nay, dòng xe này đã được cải tiến đáng kể về thiết kế và động cơ.',
        imgDetail: [SR1, SR2, SR3, SR4],
        imgLibary: [SR5, SR6, SR7, SR8],
        thongSo: {
          khoiluong: '99kg',
          dairongcao: '1.920 x 702 x 1.075 mm',
          Khoangcachtrucbanhxe: '1.217 mm',
          Dungtichbinhxang:'3,7 lít',
          Kichcoloptruocsau:'Trước: 70/90 -17 M/C 38P - Sau: 80/90 - 17 M/C 50P',
          Muctieuthunhienlieu:'1,85l/100km',
          Momentcucdai:'8,65 Nm/5.500 vòng/phút',
          Dungtichnhotmay:'0,8 lít sau khi thay nhớt - 1,0 lít sau khi rã máy',
          Hopso:'Cơ khí, 4 số tròn',
          Dungtichxylanh:'109,1 cm3'
        }
    },
    {
      id: 7,
        img: img6,
        name: 'YZF-R15',
        price: 'Giá từ: 70.000.000',
        des: 'Yamaha R15 2022 là một mẫu sportbike được đầu tư từ ngoại hình đến các trang bị hiện đại, đảm bảo làm hài lòng tất cả những ai đam mê tốc độ.',
         imgDetail: [R151, R152, R153, R154],
         imgLibary: [R155, R156, R157, R158],
         thongSo: {
          khoiluong: '137 kg',
          dairongcao: '1.970 x 670 x 1.070 mm',
          Khoangcachtrucbanhxe: '1.325 mm',
          Dungtichbinhxang:'11 lít',
          Kichcoloptruocsau:'"Trước: 100/80-17M/C 52P - Sau: 140/70-17M/C 66S"',
          Muctieuthunhienlieu:'3,99l/100km',
          Momentcucdai:'14,7 Nm tại tua máy',
          Dungtichnhotmay:'1,05 lít',
          Hopso:'Côn tay 6 cấp, ly hợp trượt hỗ trợ',
          Dungtichxylanh:'155 cc'
        }
      },
    {
      id: 8,
        img: img7,
        name: ' CBR1000RR-R Fireblade ',
        price: 'Giá từ: 1.050.000.000 VNĐ',
        des: 'ĐƯỜNG ĐUA LÀ SÂN CHƠI CỦA BẠN Nơi bạn sống thực với đam mê CBR1000RR-R Fireblade SP được trang bị hệ thống giảm xóc Smart Electronic Control (S-EC) thế hệ 2 và cụm phanh Brembo Stylema trên phanh trước. Với khả năng vận hành vượt trội, CBR1000RR-R Fireblade SP là món quà đắt giá nhất của Honda dành tặng cho các tín đồ tốc độ',
        imgDetail: [CBR1, CBR2, CBR3, CBR4],
        imgLibary: [CBR5, CBR6, CBR7, CBR8],
        thongSo: {
          khoiluong: '201kg',
          dairongcao: '2.100mm x 745mm x 1.140mm',
          Khoangcachtrucbanhxe: '1.455mm',
          Dungtichbinhxang:'16,1 lít',
          Kichcoloptruocsau:'Lốp trước: 120/70-ZR17 - Lốp sau: 200/55-ZR17',
          Muctieuthunhienlieu:'6,3 lít / 100km',
          Momentcucdai:'8,65 Nm/5.500 vòng/phút',
          Dungtichnhotmay:'2,8 lít (sau khi xả nhớt) - 3,0 lít (sau khi xả nhớt và thay lọc dầu)',
          Hopso:'6 cấp',
          Dungtichxylanh:'1.000 cm³'
        }
    },
];
const newUser = [{
  username:"abc",
  password:'123'
},
{
  username:"abc",
  password:'123'
},
{
  username:"abc",
  password:'123'
}    
]
  return (
    <div className="App">
      <Header />
      <Slider />
      <div className="margin">
      <Routes>
        <Route path='/' element={<Home arrProduct={arrProduct}/>} />
        <Route path='/PageProduct' element={<PageProduct arrProduct={arrProduct}/>} />
        <Route path='/Detail/:id' element={<Detail arrProduct={arrProduct}/>} />
        <Route path='/Promotion' element={<Khuyenmai />}/>
        <Route path='/News' element={<News />}/>
        <Route path='/NewsDetail/:id' element={<NewsDetail />}/>
        <Route path='/Service' element={<Service />}/>
        <Route path='/AboutUs' element={<AboutUs />}/>
      </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App;

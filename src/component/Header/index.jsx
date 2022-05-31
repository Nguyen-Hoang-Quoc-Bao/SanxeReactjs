import React from 'react'
import './Header.css'
import imglogo from '../../img/logo-home.png'
import { Link } from 'react-router-dom'
const Header = () => {

  const topMenu = ['Thăm dò ý kiến khách hàng', 'Câu hỏi thường gặp', 'Góp ý', 'Đăng nhập']
  const botMenu = ['khuyến mãi', 'Dịch vụ', 'tin tức', ' về chúng tôi']

  return (
    <div className='header'>
      <div className='header-top'>
        <div className='header-top-logo'>
          <img src={imglogo} alt='' /></div>
        <ul className='header-top--ul'>
          {topMenu.map((item, index) => (
            <li key={index}><Link to="/#">{item}</Link></li>
          ))}
        </ul>
      </div>
      <div className='header-bot'>
        <ul>
          <li className='level-1'>
            <Link to='/PageProduct'> sản phẩm</Link>
            <ul className='header-bot-level-2'>
              <li><a href="#/"> Yamaha</a></li>
              <li><a href="#/"> Honda</a></li>
            </ul>
          </li>
          {botMenu.map((item, index) => (
            <li key={index}><a href="#/">{item}</a></li>
          ))}
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
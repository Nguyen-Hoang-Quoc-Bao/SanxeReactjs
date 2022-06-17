import React, { useState } from 'react'
import './Header.css'
import {AiOutlineShoppingCart, AiOutlineSearch} from 'react-icons/ai'
import imglogo from '../../img/logo-home.png'
import { Link } from 'react-router-dom'
import Login from '../Login';
const Header = () => {

  const topMenu = ['Thăm dò ý kiến khách hàng', 'Câu hỏi thường gặp', 'Góp ý']


  const [activeLogin, setActiveLogin] = useState(false)
  const handleOnClick = () => {
    setActiveLogin(true)
  }

  const onClickHideShow = (value) => {
    setActiveLogin(value)
  }

  return (
    <>
      <div className='header'>
      <div className='header-top'>
        <div className='header-top-logo'>
         <Link to='/'><img src={imglogo} alt='' /></Link></div>
          <ul className='header-top--ul'>
          {topMenu.map((item, index) => (
            <li key={index}><Link to="#/">{item}</Link></li>
          ))}
          <li><div className='login' onClick={() => handleOnClick()}>ĐĂNG NHẬP</div></li>
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
          <Link to='/Promotion' className='header-bot-KM'>khuyến mãi</Link>
          <Link to='/News' className='header-bot-KM'>Tin Tức</Link>
          <Link to='/Service' className='header-bot-KM'>Dịch Vụ</Link>
          <Link to='/AboutUs' className='header-bot-KM'>về chúng tôi</Link>
      
          <li><a href="#" ><AiOutlineShoppingCart></AiOutlineShoppingCart></a></li>
          <li><a href="#"><AiOutlineSearch></AiOutlineSearch></a></li>
        </ul>
      </div>
    </div>
    <Login activeLogin={activeLogin} onClickHideShow={() => onClickHideShow()}/>
    </>
  )
}

export default Header;
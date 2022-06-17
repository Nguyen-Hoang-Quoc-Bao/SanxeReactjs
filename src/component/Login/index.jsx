import React, { useState } from "react"
import {AiOutlineClose} from 'react-icons/ai'
import PropTypes from 'prop-types'
import './Login.css'
const Login = (props) => {
    
    const {activeLogin, onClickHideShow} = props;
    const handleActive = () => {
            onClickHideShow(false)
    } ;
    
    const [username ,setUsername] = useState("");
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        console.log('CHECK DATA', username, password)
    }
        
    
return(
<div className={`formlogin ${activeLogin ? 'active' : null}`}>
<div className="container-login">
    <div className="form-content">
        <div className="form-login">
        <AiOutlineClose className="btn-close" onClick={() => handleActive()} />
            <h1>Đăng nhập</h1>
            <input type="email" placeholder="Email hoặc Tên đăng nhập"
                value={username} onChange={(e)=> setUsername(e.target.value)} />
            <input type="password" placeholder="Mật khẩu" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <a href="#/" className="forget-pass color">Quên mật khẩu</a>
            <button type="submit" className="login-btn" onClick={() => handleLogin()}>Đăng nhập</button>
            <div className="jssignup">Bạn chưa có tài khoản?<p>Đăng ký ngay</p>
            </div>
        </div>
    </div>
</div>
</div>
)
}

Login.propTypes = {
    activeLogin: PropTypes.bool,
    onClickHideShow: PropTypes.func
}
export default Login;

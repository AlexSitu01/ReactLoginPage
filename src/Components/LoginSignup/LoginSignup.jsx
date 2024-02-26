import React from 'react'
import './LoginSignup.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const ICON_SIZE = 20;
const LoginSignup = () => {
  return (
    <div className = 'container'>
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>
    <div className="inputs">
        <div className="input">
            <img src={user_icon} alt="" width={ICON_SIZE} height={ICON_SIZE}/>
            <input type="text" />
        </div>
        <div className="input">
            <img src={email_icon} alt="" width={ICON_SIZE} height={ICON_SIZE}/>
            <input type="email" />
        </div>
        <div className="input">
            <img src={password_icon} alt="" width={ICON_SIZE} height={ICON_SIZE}/>
            <input type="password" />
        </div>
    </div>
    <div className="forgot-password"><span>Lost Password?</span></div>
    <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit">Login</div>
    </div>
    </div>
  )
}

export default LoginSignup
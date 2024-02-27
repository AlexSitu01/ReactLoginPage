import React from 'react'
import email_icon from '../Components/Assets/email.png'
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="container">
        <div className="header">
            <div className="text">Find account</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={email_icon} alt=""/>
                <input type="email" placeholder='Email' />
            </div>
        </div>
        <div className="option"><Link to="/" className='link-styles'>Nevermind</Link></div>
        <div className="submit-container">
        <div className="submit">Find</div>
        </div>
    </div>
  )
}

export default ForgotPassword
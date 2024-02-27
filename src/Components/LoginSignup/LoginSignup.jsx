import React,{ useEffect, useState } from 'react'
import './LoginSignup.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignup = () => {
    
    const [action, setAction] = useState("Login")

  return (
    <div className = 'container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
    <div className="inputs">
        {action==="Sign Up"? 
        <div className="input">
            <img src={user_icon} alt=""/>
            <input type="text" placeholder="Name" />
        </div>
        :<div></div>}
        <div className="input">
            <img src={email_icon} alt=""/>
            <input type="email" placeholder="Email" />
        </div>
        <div className="input">
            <img src={password_icon} alt=""/>
            <input type="password" placeholder='Password'/>
        </div>
    </div>

        {action==="Login" && <div className="option"><span>Lost Password?</span></div>}
        {action=== "Login" && <div className="option"><span onClick={()=>{setAction("Sign Up")}}>Dont' have an account?</span></div>}
        {action==="Sign Up" && <div className="option"><span onClick={()=>{setAction("Login")}}>Already have an account?</span></div>}

   
    <div className="submit-container">
        {action==="Sign Up"?<div className="submit">Sign Up</div> : <div className="submit">Login</div>}
    </div>
    </div>
  )
}

export default LoginSignup
import React,{ useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import './LoginSignup.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import axios from  '../../api/axios'

const LOGIN_URL = ''

const LoginSignup = () => {
    
    const [action, setAction] = useState("Login");
    const [errMsg, setErrMsg] = useState('');


    const handleSignUp = async (e) => {
        e.preventDefault();
        const name = document.getElementsByClassName("name")[0].value;
        const email = document.getElementsByClassName("email")[0].value;
        const password = document.getElementsByClassName("password")[0].value;
        const userSignUpData = {name, email, password};

        // try {
        //     const response = await axios.post(LOGIN_URL, JSON.stringify(userSignUpData), 
        //         {
        //             headers:{'Content-Type': 'application/json'},
        //             withCredentials: true
        //         }
        //     );
        //     console.log(JSON.stringify(repsonse));
        // } catch (error) {
        //     // if(!err?.response){
        //     //     setErrMsg('No Server Response');
            
        //     // }
        //     // else if(err.reponse?.status===400){
        //     //     setErrMsg('Make sure all the fields are filled out.')
        //     // }
        //     // else if(err.response?.status === 401){
        //     //     setErrMsg('Unauthorized');
        //     // }
        //     // else{
        //     //     setErrMsg('Login Failed')
        //     // }
        //     // errRef.current.focus();
        // }

        fetch('', {
            method:'POST',
            headers: {"UserSignUpData": "application/json"},
            body: JSON.stringify(userSignUpData)
        })
        console.log(userSignUpData);
    }
    const handleLogin = (e) => {
        const email = document.getElementsByClassName("email")[0].value;
        const password = document.getElementsByClassName("password")[0].value;
        const userLoginData = {email, password};
        console.log(userLoginData);
    }
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
            <input className='name' type="text" placeholder="Name" />
        </div>
        :<div></div>}
        <div className="input">
            <img src={email_icon} alt=""/>
            <input className='email' type="email" placeholder="Email" />
        </div>
        <div className="input">
            <img src={password_icon} alt=""/>
            <input className='password' type="password" placeholder='Password'/>
        </div>
    </div>

        {action==="Login" && <div className="option"><Link to="/forgot-password" className='link-styles'>Lost Password?</Link></div>}
        {action=== "Login" && <div className="option"><span onClick={()=>{setAction("Sign Up")}}>Dont' have an account?</span></div>}
        {action==="Sign Up" && <div className="option"><span onClick={()=>{setAction("Login")}}>Already have an account?</span></div>}

        
    <div className="submit-container">
        {action==="Sign Up"?<div className="submit" onClick={handleSignUp}>Sign Up</div> : <div className="submit" onClick={handleLogin}>Login</div>}
    </div>
    </div>
  )
}

export default LoginSignup
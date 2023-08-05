import React, { useState } from 'react'

import "./style.css";
import Header from '../components/Header';

const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  return (
    <>
    <Header/>
      <div className="registers">
  <div className="containers ">
  <h1 className="form-title">Login</h1>
  <form >
    <div className="main-user-info">
      <div className="user-input-box">
        <label for="email">Email</label>
        <input type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}/>
      </div>
      <div className="user-input-box">
        <label for="password">Password</label>
        <input type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                value={password} onChange={e=>setPassword (e.target.value)}/>
      </div>
      
    </div>
    
    <div className="form-submit-btn">
      <input type="submit" 
      value='login' />
    </div>
  </form>
</div>
</div>
    </>
  )
}

export default Login

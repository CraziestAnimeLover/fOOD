
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import "./style.css";
import Header from '../components/Header';


const Signup = () => {

  const [name,setName]=useState("")
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [confirmPassword,setConfirmPassword]=useState("")
  
  const dispatch=useDispatch();
  const register =()=>{
      dispatch({
          type:'REGISTER',
          payload :{
              id:(Date).getTime(),
              name,username,email,password
          }
      })
  }

  return (
    <>
    <Header/>
  <div className="registers">
  <div className="containers ">
  <h1 className="form-title">Registration</h1>
  <form >
    <div className="main-user-info">
      <div className="user-input-box">
        <label for="fullName">First Name</label>
        <input type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter Full Name"
                value={name} onChange={e=>setName (e.target.value)}/>
      </div>
      <div className="user-input-box">
        <label for="username">Last Name</label>
        <input type="text"
                id="username"
                name="username"
                placeholder="Enter Lastname"
                value={username} onChange={e=>setUsername (e.target.value)}/>
      </div>
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
        <label for="phoneNumber">Phone Number</label>
        <input type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter Phone Number"/>
      </div>
      <div className="user-input-box">
        <label for="password">Password</label>
        <input type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                value={password} onChange={e=>setPassword (e.target.value)}/>
      </div>
      <div className="user-input-box">
        <label for="confirmPassword">Confirm Password</label>
        <input type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword} onChange={e=>setConfirmPassword (e.target.value)}/>
      </div>
    </div>
    
    <div className="form-submit-btn">
      <input type="submit" 
      value='Register' onClick={register}/>
    </div>
    <div className='spantag'>
      <label>Already I have Account?
        <Link to='/login'>
        <span>Login</span></Link>
      </label>
    </div>
  </form>
</div>
</div>
</>
  )
}

export default Signup

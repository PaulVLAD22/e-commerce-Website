import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import $, { post } from 'jquery';
const  LogInApp = () => {
  const [loginResponse,setLoginResponse]= useState('');
  const [password,setPassword] = useState('')
  const [username,setUsername] = useState('')
  const handleSubmit= async e =>{
    e.preventDefault();

    if (validInput()) {

      const ans = await Promise.resolve($.post('http://localhost:8000/ReactApi/login.php', { username: username, password: password }))
      const postResponse = JSON.parse(ans)
      console.log(ans)
      if (postResponse.status){
        
        console.log(postResponse)
        if (postResponse.isAdmin==0){
          if (postResponse.isActive){
            sessionStorage.setItem("loginType","user")
            sessionStorage.setItem("username",postResponse.username)
            sessionStorage.setItem('session_id',postResponse.session_id);     
            window.location.href="index.html"       
            setPassword('')
            setUsername('')
          }
          else{
            setLoginResponse("Active Your Account First!")
          }
        }
        else{
          if (postResponse.isAdmin==1){
            sessionStorage.setItem("loginType","admin")
            sessionStorage.setItem("username",postResponse.username)
            sessionStorage.setItem('session_id',postResponse.session_id);   
            window.location.href="index.html"         
            
          }
          else if (postResponse.isAdmin==2){
            sessionStorage.setItem("loginType","owner")
            sessionStorage.setItem("username",postResponse.username)
            sessionStorage.setItem('session_id',postResponse.session_id);     
            window.location.href="index.html";
          }
        }
      }
      else{
        setLoginResponse("Incorrect credentials")
      }
    }
    else{
      setLoginResponse("Bad values")
    }
  }
  
  const onChangeusername = (e)=>{
    setUsername(e.target.value)
  }
  const onChangePassword = (e)=>{
    setPassword(e.target.value)
  }
  const validInput = () =>{
    if (!password || !username){
      return false
    }
    if (password.length<7){
      document.getElementById('password').style.color="red"
      return false
    }
    return true
  }
  const resetPassword = async () =>{
    if (username){
      const ans = await Promise.resolve($.post('http://localhost:8000/ReactApi/resetPass.php', { username: username }))
      console.log(ans)
      const postResponse = JSON.parse(ans)
      if(postResponse.status){
        setLoginResponse("Email sent")
      }
      else{
        setLoginResponse("Incorrect username/email")
      }
    }
    else{
      setLoginResponse("Incorrect username/email")
    }
  }
  
  return (
    <>
    <article>
      <form  className="form d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit}>
        <div className='form-control row'>
          <label htmlFor="username">Username : </label>
          <input value={username}
          onChange={onChangeusername}
           type="username" id="username" name="username"/>
        </div>
        <div className='form-control row'>
          <label htmlFor="password">Password : </label>
          <input value={password}
          onChange={onChangePassword}
           type="password" id="password" name="password"/>
        </div>
        <button className="btn-dark" type="submit">Log in</button>
        <button className="btn-dark" onClick={resetPassword} type='button'>Reset Password(complete Username)</button>
        <h2 className="responseMessage ">{loginResponse}</h2>
      </form>
    </article>
    </>
  )
};
export default LogInApp



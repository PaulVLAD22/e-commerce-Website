import React, { useState } from 'react';
import $, { post } from 'jquery';

const  LogInApp = () => {
  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')
  const handleSubmit= async e =>{
    e.preventDefault();

    console.log('just testing')

    if (validInput()) {

      const ans = await Promise.resolve($.post('http://localhost:8000/login.php', { email: email, password: password }))
      const postResponse = JSON.parse(ans)
      
      if (postResponse.status){
        // FA SA PRIMESTI SI DETALIILE PRECUM FIRST NAME , altfel pune '' in first_name si in celelalte
        console.log(postResponse)
        sessionStorage.setItem("username",postResponse.username)
        sessionStorage.setItem("isAdmin",postResponse.isAdmin)
        window.location.reload()
        setPassword('')
        setEmail('')
      }
      else{
        console.log("Incorrect log in")
      }
    }
    else{
      console.log('Bad values');
    }
  }
  
  const onChangeEmail = (e)=>{
    setEmail(e.target.value)
  }
  const onChangePassword = (e)=>{
    setPassword(e.target.value)
  }
  const validInput = () =>{
    if (!password || !email){
      return false
    }
    if (password.length<7){
      document.getElementById('password').style.color="red"
      return false
    }
    if (!(email.includes("@"))){
      document.getElementById('email').style.color="red"
      return false
    }
    return true
  }
  
  return (
    <>
    <article >
      <form className="form d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit}>
        <div className='form-control row'>
          <label htmlFor="email">Email : </label>
          <input value={email}
          onChange={onChangeEmail}
           type="email" id="email" name="email"/>
        </div>
        <div className='form-control row'>
          <label htmlFor="password">Password : </label>
          <input value={password}
          onChange={onChangePassword}
           type="password" id="password" name="password"/>
        </div>
        <button className="btn-dark" type="submit">Log in</button>
      </form>
    </article>
    </>
  )
};

export default LogInApp
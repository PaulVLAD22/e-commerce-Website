import React, { useState } from 'react';
import $, { post } from 'jquery';
let usernameLocal='';
const  LogInApp = () => {
  const [password,setPassword] = useState('')
  const [username,setUsername] = useState('')
  const handleSubmit= async e =>{
    e.preventDefault();

    console.log('just testing')

    if (validInput()) {

      const ans = await Promise.resolve($.post('http://localhost:80/ReactApi/login.php', { username: username, password: password }))
      const postResponse = JSON.parse(ans)
      console.log(ans)
      if (postResponse.status){
        // FA SA PRIMESTI SI DETALIILE PRECUM FIRST NAME , altfel pune '' in first_name si in celelalte
        console.log(postResponse)
        if (postResponse.isAdmin==0){
          sessionStorage.setItem("username",postResponse.username)
          sessionStorage.setItem('session_id',postResponse.session_id);
          window.location.href = 'index.html';
          setPassword('')
          setUsername('')
        }
        else{
          window.location.href="admin.html";
        }
      }
      else{
        console.log("Incorrect log in")
      }
    }
    else{
      console.log('Bad values');
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
  
  return (
    <>
    <article >
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
      </form>
    </article>
    </>
  )
};

export default LogInApp;
export {usernameLocal}

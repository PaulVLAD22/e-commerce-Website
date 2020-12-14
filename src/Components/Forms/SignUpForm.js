import React, { useState } from 'react';
import $ from 'jquery'
const  SignUpApp = () => {
  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');
  const [username,setUsername]=useState('')
  const [confirmPassword,setConfirmPassword]= useState('');

  const handleSubmit= async e =>{
    e.preventDefault();
    if (validInput()){
      // fa post ca la login si insereaza in baza de date, cu tot cu un email de verifare in care ii trimiti
      const ans = await Promise.resolve($.post('http://localhost:80/ReactApi/signup.php', { username:username,email: email, password: password,passwordRepeat:confirmPassword }))
      const postResponse = JSON.parse(ans)
      console.log(ans)
      if (postResponse.status){
        //fa sa afisezi erorile la un moment dat (user already exists)
        console.log(postResponse)
        // if (postResponse)
        // setConfirmPassword('');
        // setPassword('');
        // setEmail('');
        // setUsername('')
      }
    }
    else{
      console.log('bad values');
    }
  };
  const onChangeEmail = (e) =>{
    setEmail(e.target.value);
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }
  const onChangeConfirmPassword = (e)=>{
    setConfirmPassword(e.target.value);
  }
  const onChangeUsername= (e) => {
    setUsername(e.target.value)
  }
  const validInput = () =>{
    if (!password || !email || !confirmPassword || !username){
      return false;
    }
    if (password!==confirmPassword){
      document.getElementById('password').style.color="red";
      return false;
    }
    if (password.length<7){
      document.getElementById('password').style.color="red";
      return false;
    }
    if (!(email.includes("@"))){
      document.getElementById('email').style.color="red";
      return false;
    }
    return true;
  }
  
  return (
    <>
    <article>
      <form className="form d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor="email">Email : </label>
          <input value={email}
          onChange={onChangeEmail}
           type="email" id="email" name="email"/>
        </div>
        <div className='form-control'>
          <label htmlFor="username">Username : </label>
          <input value={username}
          onChange={onChangeUsername}
           type="text" id="username" name="username"/>
        </div>
        <div className='form-control'>
          <label htmlFor="password">Password : </label>
          <input value={password} 
          onChange={onChangePassword}
           type="password" id="password" name="password"/>
        </div>
        <div className='form-control'>
          <label htmlFor="confirmPassword">Confirm Password : </label>
          <input value={confirmPassword} 
          onChange={onChangeConfirmPassword}
           type="password" id="confirmPassword" name="confirmPassword"/>
        </div>
        <button className="btn-dark" type="submit" name="submit">Register</button>
      </form>
    </article>
    </>
  )
};

export default SignUpApp;
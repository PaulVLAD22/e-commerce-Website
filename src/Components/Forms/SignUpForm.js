import React, { useState } from 'react';
import $ from 'jquery'
const  SignUpApp = () => {
  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');
  const [confirmPassword,setConfirmPassword]= useState('');

  const handleSubmit= async e =>{
    e.preventDefault();
    if (validInput()){
      // fa post ca la login si insereaza in baza de date, cu tot cu un email de verifare in care ii trimiti
      const ans = await Promise.resolve($.post('http://localhost:8000/signup.php', { email: email, password: password }))
      const postResponse = JSON.parse(ans)
      if (postResponse.status){
        // FA SA PRIMESTI SI DETALIILE PRECUM FIRST NAME , altfel pune '' in first_name si in celelalte
        console.log(postResponse)
        setConfirmPassword('');
        setPassword('');
        setEmail('');
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
  const validInput = () =>{
    if (!password || !email || !confirmPassword){
      return false;
    }
    if (password!=confirmPassword){
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
        <button className="btn-dark" type="submit">Register</button>
      </form>
    </article>
    </>
  )
};

export default SignUpApp;
import React, { useState } from 'react';

const  SignUpApp = () => {
  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');
  const [confirmPassword,setConfirmPassword]= useState('');

  const handleSubmit= (e) =>{
    e.preventDefault();
    if (validInput()){
      setConfirmPassword('');
      setPassword('');
      setEmail('');
    }
    else{
      console.log('empty values');
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
    if (confirmPassword.length<7){
      document.getElementById('confirmPassword').style.color="red";
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
      <form className="form" onSubmit={handleSubmit}>
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
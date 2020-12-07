import React, { useState } from 'react';

const  SignUpApp = () => {
  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');
  const [confirmPassword,setConfirmPassword]= useState('');

  const handleSubmit= (e) =>{
    e.preventDefault();
    if (confirmPassword && password && email){
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
        <button type="submit">Register</button>
      </form>
    </article>
    </>
  )
};

export default SignUpApp;
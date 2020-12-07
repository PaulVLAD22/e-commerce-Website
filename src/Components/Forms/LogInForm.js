import React, { useState } from 'react';

const  LogInApp = () => {
  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');
  const handleSubmit= (e) =>{
    e.preventDefault();
    if (password && email){
      setPassword('');
      setEmail('');
    }
    else{
      console.log('empty values');
    }
  };
  const onChangeEmail = (e)=>{
    setEmail(e.target.value);
  }
  const onChangePassword = (e)=>{
    setPassword(e.target.value);
  }
  
  return (
    <>
    <article>
      <form className="form" onSubmit={handleSubmit}>
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
        <button type="submit">Log in</button>
      </form>
    </article>
    </>
  )
};

export default LogInApp;
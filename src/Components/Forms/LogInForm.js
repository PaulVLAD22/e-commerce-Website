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
  
  return (
    <>
    <article>
      <form className="form" onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor="email">Email : </label>
          <input value={email}
          onChange={(e)=>setEmail(e.target.value)}
           type="email" id="email" name="email"/>
        </div>
        <div className='form-control'>
          <label htmlFor="password">Password : </label>
          <input value={password} 
          onChange={(e) => setPassword(e.target.value)}
           type="password" id="password" name="password"/>
        </div>
        
        <button type="submit">add person</button>
      </form>
    </article>
    </>
  )
};

export default LogInApp;
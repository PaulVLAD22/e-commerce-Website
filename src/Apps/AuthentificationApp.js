import React,{useState} from 'react';
import '../authentification.css';
import LogInForm from '../Components/Forms/LogInForm';
import SignUpForm from '../Components/Forms/SignUpForm';

function AuthentificationApp(){
  const [buttonMsg,setButtonMsg]=useState('Sign in');
  const changeAuthentification = ()=>{
    if (buttonMsg==="Sign in")
      setButtonMsg('Log in');
    else
      setButtonMsg('Sign in');
  }
  // NU MERGE SA SE FACA Log in PT CA NU EXISTA SIgn IN FORM , FA L .
  return  (
    <div className='d-flex flex-column justify-content-center'>
      <button className="btn btn-primary" onClick={changeAuthentification}>
        {buttonMsg}
      </button>
      {buttonMsg === 'Sign in' &&
        <LogInForm></LogInForm>
      }
      {buttonMsg === 'Log in' &&
        <SignUpForm></SignUpForm>
      }
    </div>
  );

}

export default AuthentificationApp;
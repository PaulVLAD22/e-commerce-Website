import React,{useState} from 'react';

import LogInForm from '../Components/Forms/LogInForm';
import SignUpForm from '../Components/Forms/SignUpForm';
import {Spring} from 'react-spring/renderprops';

function AuthentificationApp(data){
  // DACA data=[] totul e ok / ALTFEL PUNE LA VALUE VALORILE PE CARE LE AVEM DEJA SI FA POST DE UPDATE
  
  const [buttonMsg,setButtonMsg]=useState('Sign in');
  const changeAuthentification = ()=>{
    if (buttonMsg==="Sign in")
      setButtonMsg('Log in');
    else
      setButtonMsg('Sign in');
  }
  //Fa ca daca nu esti logat se afiseaza asta cu log in/ sign in 
  // daca esti logat apare in nav-main  :  Account
  // unde daca are detalii atunci apar ele si ceva buton de edit 
  //altfel, inputuri de a completa detaliile
  return  (
    <Spring
    from={{opacity:0}}
    to ={{opacity:1}}
    >{props =>(
      <div style={props} className='d-flex flex-column justify-content-center'>
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
    )}</Spring>
  );

}

export default AuthentificationApp;
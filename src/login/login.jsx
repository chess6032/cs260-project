import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // I don't think this page uses bootstrap but just in case...
import './login.css';
import { useNavigate } from 'react-router-dom';
import { LOCAL_USER_KEY } from '../constants';

export function Login({ setLocalUser }) {
  const navigate = useNavigate();

  React.useEffect(() => {
    let user = null;
    try {
      user = localStorage.getItem(LOCAL_USER_KEY);
    } catch (ReferenceError) {
      // do nothing actually lol
    }
    if (user) {
      navigate('/button');
    }
  }, []);

  const [emailText, setEmailText] = React.useState('');
  const [passwordText, setPasswordText] = React.useState('');

  function handleEmailFieldTyping(e) {
    setEmailText(e.target.value);
    console.log('username: ', e.target.value);
  };

  function handlePasswordFieldTyping(e) {
    setPasswordText(e.target.value);
    console.log('password: ', e.target.value);
  }

  // function handleOnKeyDown(e) {
  //   if (e.key == "Enter") {
  //     authenticateUser('/api/auth/login');
  //   }
  // }

  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: emailText, password: passwordText }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200) {
      setLocalUser(emailText);
    }
  }

  async function authenticateUser(endpoint) {
    if (emailText === '' || passwordText === '') {
      return;
    }
    console.log(`logged in ${emailText}`);
    await loginOrCreate(endpoint, emailText, passwordText); 
    navigate('./button'); // button page will handle checking if user's banned
  }

  return (
    <main className="login-main">
      <h1>Come on in.</h1> 
      <h2>But please&mdash;don't press the button.</h2>
      <div id="login-form">

        <div id="login-input">
          <span>Email:&nbsp;</span>
          <input type="text" placeholder="email" onChange={handleEmailFieldTyping} onKeyDown={handleOnKeyDown}/>

          <span>Password:&nbsp;</span>
          <input type="password" placeholder="password" onChange={handlePasswordFieldTyping} onKeyDown={handleOnKeyDown}/>
        </div>

        <div id="login-buttons">
          <button className="ckh-btn" onClick={() => authenticateUser('/api/auth/login')}>Login</button>
          <button className="ckh-btn" onClick={() => authenticateUser('/api/auth/register')}>Register</button>
        </div>
      </div>
    </main>
  );
}
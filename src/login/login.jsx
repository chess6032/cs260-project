import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // I don't think this page uses bootstrap but just in case...
import './login.css';
import { useNavigate } from 'react-router-dom';
import { LOCAL_USER_KEY } from '../constants';

export function Login({ localUser, setLocalUser }) {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (localUser) {
      navigate('/button');
    }
  }, [localUser]);

  const [emailText, setEmailText] = React.useState('');
  const [passwordText, setPasswordText] = React.useState('');

  function handleEmailFieldTyping(e) {
    setEmailText(e.target.value);
  };

  function handlePasswordFieldTyping(e) {
    setPasswordText(e.target.value);
  }

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
    await loginOrCreate(endpoint, emailText, passwordText); 
    console.log(`authenticated ${emailText}`);
    navigate('/');
  }

  return (
    <main className="login-main">
      <h1>Come on in.</h1> 
      <h2>But please&mdash;don't press the button.</h2>
      <div id="login-form">

        <div id="login-input">
          <span>Email:&nbsp;</span>
          <input type="text" placeholder="email" onChange={handleEmailFieldTyping} />

          <span>Password:&nbsp;</span>
          <input type="password" placeholder="password" onChange={handlePasswordFieldTyping} />
        </div>

        <div id="login-buttons">
          <button className="ckh-btn" onClick={() => authenticateUser('/api/auth/login')}>Login</button>
          <button className="ckh-btn" onClick={() => authenticateUser('/api/auth/register')}>Register</button>
        </div>
      </div>
    </main>
  );
}
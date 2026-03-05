import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // I don't think this page uses bootstrap but just in case...
import './login.css';
import { useNavigate } from 'react-router-dom';
import { LOCAL_USER_KEY } from '../constants';

export function Login({ setLocalUser }) {
  const navigate = useNavigate();

  const [text, setText] = React.useState('');

  function handleUserTyping(e) {
    setText(e.target.value);
    console.log(e.target.value);
  };

  function handleOnKeyDown(e) {
    if (e.key == "Enter") {
      loginUser();
    }
  }

  function loginUser() {
    if (text == '') {
      return;
    }
    console.log(`logged in ${text}`);
    localStorage.setItem(LOCAL_USER_KEY, text);
    setLocalUser(text);
    navigate('./button'); // button page will handle checking if user's banned
  }

  return (
    <main className="login-main">
      <h1>Come on in.</h1> 
      <h2>But please&mdash;don't press the button.</h2>
      <div id="login-form">

        <div id="login-input">
          <span>Username</span>
          <input type="text" placeholder="username" onChange={handleUserTyping} onKeyDown={handleOnKeyDown}/>

          <span>Password:&nbsp;</span>
          <input type="password" placeholder="password" onKeyDown={handleOnKeyDown}/>
        </div>

        <div id="login-buttons">
          <button className="ckh-btn" onClick={loginUser}>Login</button>
          <button className="ckh-btn" onClick={loginUser}>Register</button>
        </div>
      </div>
    </main>
  );
}
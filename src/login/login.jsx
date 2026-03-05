import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // I don't think this page uses bootstrap but just in case...
import './login.css';
import { useNavigate } from 'react-router-dom';

export function Login({ setLocalUser }) {
  const navigate = useNavigate();

  const [text, setText] = React.useState('');

  function userTypesOnKeyboard(e) {
    setText(e.target.value);
    console.log(e.target.value);
  };

  function loginUser() {
    console.log(`logged in ${text}`);
    // update local user in REACT AND in LOCAL STORAGE
    setLocalUser(text);
  }

  return (
    <main className="login-main">
      <h1>Come on in.</h1> 
      <h2>But please&mdash;don't press the button.</h2>
      <div id="login-form">

        <div id="login-input">
          <span>Username</span>
          <input type="text" placeholder="username" onChange={userTypesOnKeyboard}/>

          <span>Password:&nbsp;</span>
          <input type="password" placeholder="password"/>
        </div>

        <div id="login-buttons">
          <button className="ckh-btn" onClick={loginUser}>Login</button>
          <button className="ckh-btn" onClick={loginUser}>Register</button>
        </div>
      </div>
    </main>
  );
}
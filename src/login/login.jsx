import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // I don't think this page uses bootstrap but just in case...
import './login.css';

export function Login() {
  return (
    <main className="login-main">
      <h1>Come on in.</h1> 
      <h2>But please&mdash;don't press the button.</h2>
      <form id="login-form">

        <div id="login-input">
          <span>Email:</span>
          <input type="text" placeholder="email@email.com"/>
  
          <span>Password:&nbsp;</span>
          <input type="password" placeholder="password"/>
        </div>

        <div id="login-buttons">
          <button className="ckh-btn">Login</button>
          <button className="ckh-btn">Register</button>
        </div>
      </form>
    </main>
  );
}
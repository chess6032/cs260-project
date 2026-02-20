import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // for CSS Bootstrap
import './app.css';

// ROUTER STUFF
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Button } from './button/button';
import { Banned } from './banned/banned';

export default function App() {
    return (
      <BrowserRouter>
        <div className="pagebody bg-dark text-light"> {/*Serves same purpose as <body> did before*/}
          <header>
            {/* TODO: This nav menu is a placeholder...I don't anticipate I'll have it in the end product... */}
            <nav className="ckh-nav-bar">
              <span id="brand">Don't press the button</span>
              <div className="ckh-vert-separator"></div>
              <NavLink className="ckh-btn" to="">Home</NavLink> {/* go to log-in page by default */}
              <NavLink className="ckh-btn" to="button">Button</NavLink>
              <NavLink className="ckh-btn" to="banned">After pressing the button</NavLink>
            </nav>
          </header>
          <main>Main content here.</main> {/* There MUST be a <main> tag or else <footer> won't be fixed to the bottom of the page. */}
          <footer>
            <span id="author-name">Caleb Hessing</span>
            {/* <div class="ckh-vert-separator"></div> */}
            <a id="repo-link" href="https://github.com/chess6032/cs260-project">GitHub</a>
          </footer>
        </div>
      </BrowserRouter>
    );
}
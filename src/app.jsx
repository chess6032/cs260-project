import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // for CSS Bootstrap
import './app.css';

export default function App() {
    return <div className="pagebody bg-dark text-light"> {/*Serves same purpose as <body> did before*/}
    <header>
      {/* TODO: This nav menu is a placeholder...I don't anticipate I'll have it in the end product... */}
      <nav className="ckh-nav-bar">
        <span id="brand">Don't press the button</span>
        <div className="ckh-vert-separator"></div>
        <a className="ckh-btn" href="login.html">Home</a>
        <a className="ckh-btn" href="button.html">Button</a>
        <a className="ckh-btn" href="banned.html">After pressing the button</a>
      </nav>
    </header>
    <main>Main content here.</main> {/* There MUST be a <main> tag or else <footer> won't be fixed to the bottom of the page. */}
    <footer>
      <span id="author-name">Caleb Hessing</span>
      {/* <div class="ckh-vert-separator"></div> */}
      <a id="repo-link" href="https://github.com/chess6032/cs260-project">GitHub</a>
    </footer>
    </div>;
}
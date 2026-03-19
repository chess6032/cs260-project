import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // for CSS Bootstrap
import './app.css';

// ROUTER STUFF
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Login } from './login/login';
import { Button } from './button/button';
import { Banned } from './banned/banned';
import { Profile } from './profile';

import { LOCAL_USER_KEY } from "./constants.js";

export default function App() {
    const [localUser, setLocalUser] = React.useState(localStorage.getItem(LOCAL_USER_KEY) || null); // represents if the user 
    // TODO: I abuse local storage a lot. Is there a way to refactor my code so that 
    // the current user is just passed around as a variable to the different pages?

    function setLocalUserInStorageAndState(user) {
      setLocalUser(user);
      localStorage.setItem(LOCAL_USER_KEY, user);
    }

    function AuthGate({ localUser }) {
        const [banStatus, setBanStatus] = React.useState('loading'); // 'loading' | 'banned' | 'ok'
    
        React.useEffect(() => {
            if (!localUser) return; // no need to check ban status if user isn't even logged in.
            async function checkBanStatus() {
                try {
                    const response = await fetch('/api/isbanned');
                    const data = response.ok ? await response.json() : { banned: true };
                    setBanStatus(data?.banned ? 'banned' : 'ok');
                } catch {
                    setBanStatus('banned');
                }
            }
            checkBanStatus();
    
        }, [localUser]);
    
        if (!localUser) return <Navigate to="/login" replace />;
        if (banStatus === 'loading') return <main>Loading...</main>; // while waiting for fetch API call
        if (banStatus === 'banned') return <Navigate to='/banned' replace />;
        return <Navigate to='/button' replace />; // banStatus === 'ok'
    }

    return (
        <BrowserRouter>
          <div className="pagebody bg-dark text-light"> {/*Serves same purpose as <body> did before*/}
            <header>
              {/* TODO: This nav menu is a placeholder...I don't anticipate I'll have it in the end product... */}
              <nav className="ckh-nav-bar">
                <div id="brand">Don't press the button</div>
              </nav>
              <div style={{textAlign: "right"}}>
                <Profile localUser={localUser} setLocalUser={setLocalUser}/>
              </div>
            </header>
  
            {/* <main> tag is provided by the components the Router uses */}
            <Routes>
              <Route path='login' element={<Login setLocalUser={setLocalUserInStorageAndState} />} exact /> {/* "exact" isn't needed for "/" paths anymore as of React V6...but the instructions had this here so I'll keep it ig*/}
              <Route path='button' element={<Button />}/>
              <Route path='banned' element={<Banned />}/>
              <Route path='/' element={<AuthGate localUser={localUser}/>}/>
              <Route path='*' element={<NotFound />}/> {/* catches any other address so that we can give a 404 not found error. */}
            </Routes>
  
            <footer>
                <span className="author-name">Caleb Hessing</span>
                {/* <div className="ckh-vert-separator"></div> */}
                <a className="repo-link" href="https://github.com/chess6032/cs260-project">GitHub</a>
            </footer>
          </div>
        </BrowserRouter>
    );
}

function NotFound() {
  return <main>404: Not found :(</main>
}
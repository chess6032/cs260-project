import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { STATUS_GOOD, STATUS_BANNED, LOCAL_USER_KEY } from './constants.js';

export function Profile({ localUser, setLocalUser }) {
  // TODO: add log out functionality. (Right now it just returns to login page.)

  const navigate = useNavigate();

  function logoutUser() {
    let userSet = true;
    try {
      localStorage.removeItem(LOCAL_USER_KEY, null);
    } catch (ReferenceError) {
      userSet = false;
    }
    if (userSet) {
      setLocalUser(null);
    }
    console.log(`logged out ${localUser}`);
    navigate(''); // navigate to home page (login)
  }

  return (
    <div className="profile">
      <span>{localUser ? (`USER: ${localUser}`) : "LOGGED OUT"}</span>
      {localUser && <span className='ckh-vert-separator'></span>}
      {localUser && 
        <span>
          STATUS: {localStorage.getItem(localStorage.getItem(LOCAL_USER_KEY)) == STATUS_GOOD ? "GOOD" : "BANNED"}&nbsp;
        </span>
      }
      {localUser && <button className="ckh-btn" onClick={logoutUser}>log out</button>}
    </div>
  );
}
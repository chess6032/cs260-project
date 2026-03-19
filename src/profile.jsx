import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { STATUS_GOOD, STATUS_BANNED, LOCAL_USER_KEY } from './constants.js';

export function Profile({ localUser, setLocalUser }) {

  const navigate = useNavigate();

  async function logoutUser() {
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
    await fetch('/api/auth/logout');
    navigate(''); // navigate to home page (login)
  }

  // TODO: make header size consistent regardless of log out button's presence/padding?
  return !localUser ? 
        <div className="profile">
          <span>LOGGED OUT</span>
        </div>
        : 
        <div className="profile">
          <span>USER: {localUser}</span>
          <span className='ckh-vert-separator'></span>
          <span>
            STATUS: {localStorage.getItem(localStorage.getItem(LOCAL_USER_KEY)) == STATUS_GOOD ? "GOOD" : "BANNED"}&nbsp;
          </span>
          <button className="ckh-btn btn-thin" onClick={logoutUser}>log out</button>
        </div>
        ;
}
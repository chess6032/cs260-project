import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { STATUS_GOOD, STATUS_BANNED, LOCAL_USER_KEY } from './constants.js';

export function Profile({ localUser, setLocalUser }) {

  const navigate = useNavigate();

  async function logoutUser() {
    await fetch('/api/auth/logout', { method: 'DELETE' });
    console.log(`logged out ${localUser}`);
    setLocalUser(null);
    navigate('/'); // navigate to home page (login)
  }

  // TODO: make header size consistent regardless of log out button's presence/padding?
  return !localUser ? 
        <div className="profile">
          <span>LOGGED OUT</span>
        </div>
        : 
        <div className="profile">
          <span>{localUser}</span>
          <span className='ckh-vert-separator'></span>
          <button className="ckh-btn btn-thin" onClick={logoutUser}>log out</button>
        </div>
        ;
}
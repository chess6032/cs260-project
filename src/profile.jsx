import React from 'react';
import { NavLink } from 'react-router-dom';

export function Profile({ localUser }) {
  // TODO: add log out functionality. (Right now it just returns to login page.)

  return (
    <div>
      <span className='profile'>USER: {localUser ? localUser : "LOGGED OUT"}</span>
      <span className='ckh-vert-separator'></span>
      <NavLink className="ckh-btn" to="">log out</NavLink>
    </div>
  );
}
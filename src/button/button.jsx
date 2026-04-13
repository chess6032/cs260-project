import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './button.css';
import { useNavigate, Navigate } from 'react-router-dom';
import { NotifTable } from './notifs';

import { PressNotifier } from './pressNotifier';

export function Button( { localUser } ) {
  const navigate = useNavigate();
  if (!localUser) {
    console.log('sending you back to where you came from---DUNCE');
    return <Navigate to='/' replace />
  }

  async function userPressesButton() {
    let response = await fetch('/api/banme', {method: 'PUT'} );
    // TODO: send WS message
    navigate("/");
  }

  return (
    <main className="button-main">
      <div>
        <button id="the-button" onClick={userPressesButton}>DON'T PRESS ME</button>
      </div>
      <NotifTable />
    </main>
  );
}
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './button.css';
import { useNavigate } from 'react-router-dom';
import { NotifTable } from './notifs';
import { STATUS_GOOD, STATUS_BANNED, LOCAL_USER_KEY } from '../constants';

export function Button( /*{isUserBanned}*/ ) {
  const navigate = useNavigate();

  async function userPressesButton() {
    let response = await fetch('/api/banme', {method: 'PUT'} );
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
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './button.css';
import { useNavigate } from 'react-router-dom';
import { NotifTable } from './notifs';
import { STATUS_GOOD, STATUS_BANNED, LOCAL_USER_KEY } from '../constants';

export function Button() {
  const navigate = useNavigate();

  // INITIAL RENDER: reroute the user if they're banned
  React.useEffect(() => {
    let user = localStorage.getItem(LOCAL_USER_KEY || null);
    if (!user) {
      // user not logged in 
      navigate('/'); // send to login page
      return;
    }
    let status = localStorage.getItem(user || null);
    if (!status) {
      // user doesn't have a state assigned yet
      localStorage.setItem(user, STATUS_GOOD);
    } else if (status == STATUS_BANNED) {
      navigate('/banned');
    }
  }, []);

  function userPressesButton() {
    let user = localStorage.getItem(LOCAL_USER_KEY);
    localStorage.setItem(user, STATUS_BANNED);
    navigate("/banned");
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
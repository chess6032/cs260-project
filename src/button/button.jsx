import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './button.css';
import { useNavigate } from 'react-router-dom';
import { NotifTable } from './notifs';
import { STATUS_GOOD, STATUS_BANNED, LOCAL_USER_KEY } from '../constants';

export function Button( /*{isUserBanned}*/ ) {
  const navigate = useNavigate();
  const [checking, setChecking] = React.useState(true); // start as "loading"

  // INITIAL RENDER: reroute the user if they're banned
  // React.useEffect(() => {
  //   async function checkBanStatus() {
  //     let user = localStorage.getItem(LOCAL_USER_KEY || null);
  //     console.log(typeof(user));
  //     if (!user) {
  //       // user not logged in 
  //       navigate('/'); // send to login page
  //       return;
  //     }
  //     const isBanned = await isUserBanned();
  //     console.log('banned?', isBanned);
  //     if (isBanned) {
  //       navigate('/banned');
  //     } else {
  //       setChecking(false); // only display page once we know fs the user is not banned
  //     }
  //   }
  //   checkBanStatus();
  // }, []);

  // if (checking) return null;

  async function userPressesButton() {
    let response = await fetch('/api/banme');
    console.log('hello there');
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
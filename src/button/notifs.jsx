import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './notifs.css';

import { PressNotifier } from './pressNotifier';

export function NotifTable() {
  const MAX_NOTIF_LIST_LEN = 5

  // TODO: find a better way to implement the notification list 
  // than a table whose rows are filled by an always-ten-element array.
  // TODO: modify CSS to work better w/ different list lengths.
  const [notifList, setNotifList] = React.useState(Array(MAX_NOTIF_LIST_LEN-1).fill(null).concat("WEBSOCKET PLACEHOLDER"));

  const addNotif = (user="another user") => {
    setNotifList((prevNotifs) => {
      if (prevNotifs.length > MAX_NOTIF_LIST_LEN-1) {
        return prevNotifs.slice(1, MAX_NOTIF_LIST_LEN).concat({ name: user});
      } else {
        return prevNotifs.concat({ name: user});;
      }
    });
    
  };

  React.useEffect(() => {
    const handler = (event) => addNotif(event.user);
    PressNotifier.addHandler(handler);
    return () => PressNotifier.removeHandler(handler);
  }, []); 

  return (
    <table>
      <thead><tr><th>Notifications</th></tr></thead>
      <tbody>
        {notifList.map((fool) => ( fool ? (
          fool.name ? <tr><td>{fool.name} pressed the button.</td></tr>
          : <tr><td>{fool}</td></tr>
          ) 
          : <tr><td>&nbsp;</td></tr>
        ))}
      </tbody>
    </table>
  );
}
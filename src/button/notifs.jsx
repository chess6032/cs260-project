import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './notifs.css';

export function NotifTable() {
  const MAX_NOTIF_LIST_LEN = 10

  // TODO: find a better way to implement the notification list 
  // than a table whose rows are filled by an always-ten-element array
  const [notifList, setNotifList] = React.useState(Array(MAX_NOTIF_LIST_LEN-1).fill(null).concat("WEBSOCKET PLACEHOLDER"));


  const addNotif = (user="another user") => {
    setNotifList((prevNotifs) => {
      //  .concat({ name: user, num: prevNotifs.length });
      if (prevNotifs.length > MAX_NOTIF_LIST_LEN-1) {
        return prevNotifs.slice(1, MAX_NOTIF_LIST_LEN).concat({ name: user});
      } else {
        return prevNotifs.concat({ name: user});;
      }
    });
    
  };



  // placeholder for websocket
  const randomName = () =>
    ['JohnDoe42', 'JoeMama000', 'SantaClause25', 'xXgamerXx', 'skibidiGyatt6767'].at(Math.floor(Math.random() * 5)); 
  
  React.useEffect(() => {
    console.log('rendered');
    const interval = setInterval(() => {
      addNotif(randomName());
    }, 1000);

    return () => clearInterval(interval); // cleanup
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
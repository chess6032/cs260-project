import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './notifs.css';

export function NotifTable() {
  const [notifList, setNotifList] = React.useState([]);

  const addNotif = (user="another user") => {
    setNotifList((prevNotifs) => [...prevNotifs, { name: user, num: prevNotifs.length }]);
                                                      // TODO: remove num member.
                                                      // (right now I use it b/c table rows HAVE to have a unique "key" property.)
  };

  // placeholder for websocket
  React.useEffect(() => {
    console.log('rendered');
    const interval = setInterval(() => {
      addNotif(`user${notifList.length}`);
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, [notifList]); // TODO: remove notifList for the dependency list. 
                   // (it was the easiest way to get the "user1", "user2", "user3" thing set up,
                   // but it's re-rendering the page every time notifList is updated, which is 
                   // poor performance and won't be necessary when the usernames will be 
                   // coming from websocket itself.)

  return (
    <table>
      <thead><tr><th>Notifications</th></tr></thead>
      <tbody>
        {notifList.map((fool) => (
          <tr key={fool.num}><td>{fool.name} pressed the button.</td></tr>
        ))}
      </tbody>
    </table>
  );
}
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // I don't think this page uses bootstrap but just in case...
import './banned.css';
import { useNavigate } from 'react-router-dom';
import { LOCAL_USER_KEY, STATUS_GOOD } from '../constants';

// react pt. 2: added placeholder JS for 3rd-party service calls. (See Simon React Pt. 2 --> About component)

export function Banned() {
  const navigate = useNavigate();

  // PLACEHOLDER FOR 3RD-PARTY SERVICE CALLS
  const [quote, setQuote] = React.useState("Loading something wise...");

  React.useEffect(() => {
    // check that user is banned
    // let user = localStorage.getItem(LOCAL_USER_KEY || null);
    // if (!user) {
    //   // user not logged in
    //   navigate('/');
    //   return; // not sure if ts is necessary
    // }
    // let status = localStorage.getItem(user || null);
    // if (!status) {
    //   navigate('/');
    // } else if (status == STATUS_GOOD) {
    //   navigate('/button');
    // }


    setQuote(`"This quote was filled by a useState setter. One day, that setter will use a cool 3rd-party API call."`)
  }, []); // by passing in an empty subarray for the dependencies, this useEffect callback will only be called the first time the Banned component renders.

  return (
    <main className="banned-main">
      <h1>YOU PRESSED THE BUTTON!!</h1>
      <p>You have proven that you are NOT a responsible agent of freewill. As such, your freewill has been restricted: you will never have the 
        choice of pressing the button ever again.</p>
      <div className="quote-container">
        <span className="quote">{quote}<br/><span className="quote-attribution">Kanye West</span></span>  
        <img id="image" src="Kanye_West_at_the_2009_Tribeca_Film_Festival_(crop_2)-DavidShankbone.jpg" height="200" />
      </div>
    </main>
  );
}
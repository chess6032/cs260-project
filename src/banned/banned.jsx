import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // I don't think this page uses bootstrap but just in case...
import './banned.css';
import { useNavigate, Navigate } from 'react-router-dom';
import { LOCAL_USER_KEY, STATUS_GOOD } from '../constants';

// react pt. 2: added placeholder JS for 3rd-party service calls. (See Simon React Pt. 2 --> About component)

export function Banned({ localUser }) {
  if (!localUser) {
    console.log('sending you back to where you came from---NERD');
    return <Navigate to='/' replace />
  }

  // PLACEHOLDER FOR 3RD-PARTY SERVICE CALLS
  const [quote, setQuote] = React.useState("Loading something wise...");

  React.useEffect(() => {
    async function populateQuote() {
      const response = await fetch('https://api.kanye.rest');
      const data = await response.json();
      const quote = data.quote;
      console.log(quote);
      setQuote(`"${quote ? quote : ' :( '}"`);
    }
    populateQuote();
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
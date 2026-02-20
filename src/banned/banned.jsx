import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // I don't think this page uses bootstrap but just in case...
import './banned.css';

export function Banned() {
  return (
    <main className="banned-main">
      <h1>YOU PRESSED THE BUTTON!!</h1>
      <p>You have proven that you are NOT a responsible agent of freewill. As such, your freewill has been restricted: you will never have the 
        choice of pressing the button ever again.</p>
      <div className="quote-container">
        <span className="quote">"You can believe any quote you read on the internet&mdash;especially if it comes from a cool external API call." <br/> <span class="quote-attribution">Kanye West</span></span>
        <img id="image" src="Kanye_West_at_the_2009_Tribeca_Film_Festival_(crop_2)-DavidShankbone.jpg" height="200" />
      </div>
    </main>
  );
}
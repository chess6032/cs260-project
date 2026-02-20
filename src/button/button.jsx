import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './button.css';

export function Button() {
  return (
    <main>
      <div>
        <button id="the-button">DON'T PRESS ME</button>
      </div>
      <table>
        <tr><th>Notifications</th></tr>
        <tr><td>JohnDoe42 pressed the button.</td></tr>
        <tr><td>JoeMama000 pressed the button.</td></tr>
        <tr><td>SantaClause25 pressed the button.</td></tr>
        <tr><td>xXgamerXx pressed the button.</td></tr>
        <tr><td>skibidiGyatt6767 pressed the button.</td></tr>
      </table>
    </main>
  );
}
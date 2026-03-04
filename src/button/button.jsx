import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './button.css';
import { useNavigate } from 'react-router-dom';
import { NotifTable } from './notifs';

export function Button() {
  const navigate = useNavigate();

  return (
    <main className="button-main">
      <div>
        <button id="the-button" onClick={() => navigate("/banned")}>DON'T PRESS ME</button>
      </div>
      <NotifTable />
    </main>
  );
}
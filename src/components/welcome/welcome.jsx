import React from 'react';
import './welcome.css';

function Welcome({ username }) {
  return (
    <div className="header">
      <h1>Welcome back<br />{username}!</h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
}

export default Welcome;
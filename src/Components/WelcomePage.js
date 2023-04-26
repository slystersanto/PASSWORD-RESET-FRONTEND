import React from 'react';

function WelcomePage({ username }) {
  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <p>Thank you for joining our platform. We hope you enjoy using our services!</p>
      <button>Get Started</button>
    </div>
  );
}

export default WelcomePage;

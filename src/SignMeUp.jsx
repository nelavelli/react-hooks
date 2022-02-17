import React, { useState } from 'react';

export default function SignMeUp({ signupCallback }) {
  const [email, setEmail] = useState('');

  return (
    <div className="container">
      <div>
        <div className="content">
          <input
            placeholder="Enter Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />{' '}
          &nbsp;
          <button
            disabled={!email.includes('@')}
            onClick={() => {
              signupCallback(email);
              setEmail('');
              alert('sign up confirmed.');
            }}
            className="btn"
            type="submit"
          >
            Get updates
          </button>
        </div>
      </div>
    </div>
  );
}

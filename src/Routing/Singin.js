import React from 'react';
import '../Routing/Signin.css'; 

function Signin() {
  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <div className="input-fields">
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
        <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div>
          <button>Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default Signin;

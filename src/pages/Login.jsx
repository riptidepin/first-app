import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    // Perform login action here
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="login-form">
        <h1 align = 'center' className="title">Login</h1>
        <div align = 'center' className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div align = 'center' className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <button align = 'center' type="submit" className="submit-button">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
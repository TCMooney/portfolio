import React, { useState, useContext } from 'react';

import { AuthContext } from '../contexts/AuthContext';

export default function Auth(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { logIn } = useContext(AuthContext);

  const onSubmit = event => {
    event.preventDefault();

    const client = {
      client: {
        email,
        password
      }
    }

    logIn(client, props.history.push('/'))
  }
  return (
    <div>
      <form onSubmit={onSubmit} className='login-form'>
        <input
          className='login-email'
          type='email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder='Email'
        />
        <input
          className='login-password'
          type='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder='Password'
        />
        <button className='login-button'>Login</button>
      </form>
    </div>
  )
}

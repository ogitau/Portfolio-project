import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../login-signup.css"


export default function Login() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    if (username === 'Faith' && email === 'Faith@gmail.com' && password === '1234') {
      navigate('/records');
    } else {
      alert('Invalid credentials');
    }
  };


  return (
    <>
      <div className="wrapper">
        <div className="form-wrapper sign-in">
            <form onSubmit={handleLogin}>
                <h2>login</h2>
                <div className="input-group">
                    <input type="text"
                           required
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}       
                    />
                    <label htmlFor="">Username</label>
                </div>
                <div className="input-group">
                    <input type="email"
                           required
                           value={email} 
                           onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="">Email</label>
                </div>
                <div className="input-group">
                    <input type="password"
                           required
                           value={password} 
                           onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="">password</label>
                </div>
                <div className="remember">
                    <label htmlFor=""><input type="checkbox"/> Remember me</label>
                </div>
                <button type="submit" onClick={handleLogin}>Login</button>
               
            </form>
        </div>

    </div>
    </>
  )
}

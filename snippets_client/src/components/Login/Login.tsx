import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthStatus, setCsrfToken } from '../Redux/actions';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.xsrfCookieName = 'csrftoken';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const authStatus = useSelector((state: any) => state.authStatus);
  const csrfToken = useSelector((state: any) => state.csrfToken);
  const navigate = useNavigate()

  useEffect(() => {
    fetch('http://localhost:8000/csrf_token/')
      .then(response => response.json())
      .then(data => dispatch(setCsrfToken(data.csrf_token)))
      .catch(error => console.error(error));
  }, []);
  
  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:8000/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        dispatch(setAuthStatus(true));
        console.log('Successful login')
        navigate("/snippets", { replace: true });
      } else {
        const data = await response.json();
        setError(data.error || 'Authentication failed');
      }
    } catch (error) {
      setError('Error during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>{authStatus}</p>
    </div>
  );
};

export default Login;
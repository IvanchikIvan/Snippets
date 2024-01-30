import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthStatus } from '../Redux/actions';


const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const csrfToken = document.cookie.replace(
    /(?:(?:^|.*;\s*)csrftoken\s*=\s*([^;]*).*$)|^.*$/,
    '$1'
  );
  const dispatch = useDispatch();
  const authStatus = useSelector((state: any) => state.authStatus);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:8000/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        dispatch(setAuthStatus(true));
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
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthStatus, setCsrfToken, setUsername, setUserID } from '../Redux/actions';
import axios from 'axios';

axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.xsrfCookieName = 'csrftoken';

const Login: React.FC = () => {
  const [username, setUsernameField] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const authStatus = useSelector((state: any) => state.authStatus);
  const csrfToken = useSelector((state: any) => state.csrfToken);

  useEffect(() => {
    axios.get('http://localhost:8000/api/csrf_token/')
      .then(response => dispatch(setCsrfToken(response.data.csrf_token)))
      .catch(error => console.error(error));
  }, []);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8000/api/login/', {
        username,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,
        },
      });

      if (response.status === 200) {
        dispatch(setAuthStatus(true));
        dispatch(setUsername(username));
        dispatch(setUserID(response.data['user_id']))
        localStorage.setItem('username', username);
        localStorage.setItem('userID', response.data['user_id']);
        localStorage.setItem('authStatus', response.data.token);

      } else {
        setError(response.data.error || 'Authentication failed');
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
          onChange={(e) => setUsernameField(e.target.value)}
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

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthStatus } from '../Redux/actions';

const Logout: React.FC = () => {
  const dispatch = useDispatch();
  const authStatus = useSelector((state: any) => state.authStatus);

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:8000/logout/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        dispatch(setAuthStatus(false));
        console.log('Logout successful', authStatus)
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div className="nav-link">
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
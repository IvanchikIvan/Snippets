import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthStatus } from "../Redux/actions";
import styles from '../Logout/Logout.module.css'

const Logout: React.FC<{ isOpen: boolean; }> = ({isOpen}) => {
  const dispatch = useDispatch();
  const csrfToken = useSelector((state: any) => state.csrfToken);

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/logout/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrfToken,
        },
      });

      if (response.ok) {
        dispatch(setAuthStatus(false));
        localStorage.removeItem("authStatus");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <>
      {!isOpen ? (
        <></>
      ) : (
        <div className={styles.container}>
          <button onClick={handleLogout} >
            <p>Logout</p>
          </button>
        </div>
      )}
    </>
  );
};

export default Logout;

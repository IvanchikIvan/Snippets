import React from "react";
import { useDispatch } from "react-redux";
import { setAuthStatus } from "../Redux/actions";

const Logout: React.FC<{ isOpen: boolean; }> = ({isOpen}) => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/logout/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
        <div className="nav-link">
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </>
  );
};

export default Logout;

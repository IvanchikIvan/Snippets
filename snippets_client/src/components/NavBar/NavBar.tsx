import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logout from "../Logout/Logout";
import { useSelector } from "react-redux";
import styles from "./NavBar.module.css";
import Login from "../Login/Login";

const Header: React.FC = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isLogoutOpen, setLogoutOpen] = useState(false);
  const authStatus = useSelector((state: any) => state.authStatus);
  const username = useSelector((state: any) => state.name);

  const toggleLogin = () => {
    setLoginOpen(!isLoginOpen);
  };

  const toggleLogout = () => {
    setLogoutOpen(!isLogoutOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/snippets" className={styles.brand}>
          <strong>Your Snippets!</strong>
        </Link>
        <nav className={styles.navRight}>
          <Link to="/add_snippet" className={styles.navLink}>
            Add Snippet
          </Link>
          <Link to="/snippets/my-snippets" className={styles.navLink}>
            My Snippets
          </Link>
          {authStatus ? (
            <div className={styles.navLink}>
              <button className={styles.dropdownToggle} onClick={toggleLogout}>
                Welcome, {username}
              </button>
              {isLogoutOpen && <Logout />}
            </div>
          ) : (
            <div className={styles.navLink}>
              <button className={styles.dropdownToggle} onClick={toggleLogin}>
                Login
              </button>
              {isLoginOpen && <Login />}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;

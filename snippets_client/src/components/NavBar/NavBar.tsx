import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logout from "../Logout/Logout";
import { useSelector } from "react-redux";
import styles from "./NavBar.module.css";
import Login from "../Login/Login";

const Header: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const authStatus = useSelector((state: any) => state.authStatus);
  const username = useSelector((state: any) => state.name);

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.brand}>
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
              <button className={styles.dropdownToggle} onClick={toggle}>
                Welcome, {username}
              </button>
              <Logout isOpen={isOpen}/>
            </div>
          ) : (
            <div className={styles.navLink}>
              <button className={styles.dropdownToggle} onClick={toggle}>
                Login
              </button>
                <Login isOpen={isOpen}/>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;

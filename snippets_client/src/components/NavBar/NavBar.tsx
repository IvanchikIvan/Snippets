import React from "react";
import { Link } from "react-router-dom";
import Logout from "../Logout/Logout";
import { useSelector } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import Login from "../Login/Login";

const Header: React.FC = () => {
  const authStatus = useSelector((state: any) => state.authStatus);
  const pFDDSFs = useSelector((state: any) => state.username);

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/snippets">
          Your Snippets!
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="form-inline">
              <Link className="btn btn-outline-success" to="/add_snippet">
                Add Snippet
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/my_snippets">
                My Snippets
              </Link>
            </li>
          </ul>
          {authStatus ? (
            <ul className="navbar-nav mr-right">
              <span className="navbar-text"></span>
              <li className="nav-item active">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Welcome, {pFDDSFs}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      <Logout />
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>
          ) : (
            <li className="navbar-nav mr-right nav-item dropdown dropdown-menu-right">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Login
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <Login />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;

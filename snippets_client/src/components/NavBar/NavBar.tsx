import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../Logout/Logout';

const Header: React.FC = () => {
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

          {true ? (
            <ul className="navbar-nav mr-right">
              <span className="navbar-text"></span>
              <li className="nav-item active">
                <Logout />
              </li>
            </ul>
          ) : (
            <li className="navbar-nav mr-right nav-item dropdown dropdown-menu-right">
              <a
                className="btn btn-outline-primary my-2 my-sm-0 dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Авторизация
              </a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                {/* Вставьте код для формы входа */}
              </div>
            </li>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;

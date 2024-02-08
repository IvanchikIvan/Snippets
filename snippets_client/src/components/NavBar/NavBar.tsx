import React from "react";
import { Link } from "react-router-dom";
import Logout from "../Logout/Logout";
import { useSelector } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import Login from "../Login/Login";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header: React.FC = () => {
  const authStatus = useSelector((state: any) => state.authStatus);
  const username = useSelector((state: any) => state.name);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/snippets" className="text-white">
            <strong>Your Snippets!</strong>
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/add_snippet" className="nav-link">
            Add Snippet
          </Link>
          <Link to="/my_snippets" className="nav-link">
            My Snippets
          </Link>
        </Nav>
        <Nav>
          {authStatus ? (
            <Nav.Item>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Welcome, {username}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Logout />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>
          ) : (
            <Nav.Item>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Login
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Login />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;

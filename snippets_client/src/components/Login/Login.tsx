import React, { useState } from "react";
import axios from "axios";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const loginUser = async () => {
    try {
      const response = await axios.post("http://localhost:8000/login/", {
        username,
        password,
      });
      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);
      console.log("Sucsefull login")
    } catch (err) {
      console.error('Login error', err)
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
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
        <button type="button" onClick={loginUser}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

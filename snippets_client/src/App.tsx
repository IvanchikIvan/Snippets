import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import SnippetList from "./components/SnippetsList/SnippetsList";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import axios from "axios";

const App: React.FC = () => {

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>();

  useEffect(() => {
    const checkAuthentication = async () => {
      setIsAuthenticated(await axios.get('http://localhost:8000/check-auth/'))
      console.log(isAuthenticated)
    };

    checkAuthentication();
}, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Navigate to="/snippets" /> }/>  
        <Route path="/snippets" element={<SnippetList/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  );
};

export default App;

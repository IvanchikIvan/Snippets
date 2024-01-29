import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import SnippetList from "./components/SnippetsList/SnippetsList";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { Provider } from 'react-redux';
import store from './components/Redux/store';
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
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={ <Navigate to="/snippets" /> }/>  
          <Route path="/snippets" element={<SnippetList/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

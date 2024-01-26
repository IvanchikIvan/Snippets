import React from 'react';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SnippetList from './components/SnippetsList/SnippetsList';
import Register from './components/Register/Register';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/snippets" element={<SnippetList />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
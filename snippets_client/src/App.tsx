import React from 'react';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SnippetList from './components/SnippetsList/SnippetsList';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/snippets" element={<SnippetList />} />
      </Routes>
    </Router>
  );
}

export default App;
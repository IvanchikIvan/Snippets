import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SnippetList from "./components/SnippetsList/SnippetsList";
import Register from "./components/Register/Register";
import { Provider } from 'react-redux';
import store from './components/Redux/store';
import SnippetPage from "./components/SnippetPage/SnippetPage";
import CreateSnippetForm from "./components/createSnippetPage/CreateSnippetPage";
import MySnippetsPage from "./components/MySnippetsPage/MySnippetsPage";
import React from "react";


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<SnippetList/>} />  
          <Route path="/snippets/my-snippets" element={<MySnippetsPage/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/snippets/:id" element={<SnippetPage/>} />
          <Route path="/add_snippet" element={<CreateSnippetForm />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import SnippetList from "./components/SnippetsList/SnippetsList";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { Provider } from 'react-redux';
import store from './components/Redux/store';
import SnippetPage from "./components/SnippetPage/SnippetPage";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={ <Navigate to="/snippets" /> }/>  
          <Route path="/snippets" element={<SnippetList/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/snippets/:id" element={<SnippetPage/>} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

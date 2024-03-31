import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
import "./SnippetsList.css";

interface Snippet {
  id: number;
  name: string;
  code: string;
  creation_date: string;
  user: number | null;
}

const SnippetList: React.FC = () => {
  const [snippets, setSnippets] = useState<Snippet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/snippets/");
        setSnippets(response.data);
      } catch (error) {
        console.error("Ошибка запроса получения сниппетов:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="snippetListContainer">
      <Sidebar />
      <div className="snippetContent">
        <h1 className="pageTitle">Snippets List</h1>
        <div className="snippetTableContainer">
          <table className="snippetTable">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Дата создания</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {snippets.map((snippet) => (
                <tr key={snippet.id}>
                  <td>{snippet.id}</td>
                  <td>{snippet.name}</td>
                  <td>{snippet.creation_date}</td>
                  <td>
                    <Link
                      to={`/snippets/${snippet.id}`}
                      className="snippetLink"
                    >
                      To Snippet
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SnippetList;

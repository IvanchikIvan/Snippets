import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

interface Snippet {
  id: number;
  name: string;
  code: string;
  creation_date: string;
  user: number | null;
}

const MySnippetsPage: React.FC = () => {
  const [snippets, setSnippets] = useState<Snippet[]>([]);
  const authToken = useSelector((state: any) => state.authStatus);

  useEffect(() => {
    const fetchSnippets = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/snippets/my-snippets",
          {
            headers: {
              Authorization: `Token ${authToken}`,
            },
          }
        );
        setSnippets(response.data);
      } catch (error) {
        console.error("Ошибка запроса получения сниппетов:", error);
      }
    };

    fetchSnippets();
  }, []);

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <h1 className="mb-4">Список сниппетов</h1>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Дата создания</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {snippets.map((snippet) => (
                <tr key={snippet.id}>
                  <td>{snippet.id}</td>
                  <td>{snippet.name}</td>
                  <td>{snippet.creation_date}</td>
                  <td>
                    <Link to={`/snippets/${snippet.id}`}>
                      <button className="btn btn-primary">To Snippet</button>
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

export default MySnippetsPage;

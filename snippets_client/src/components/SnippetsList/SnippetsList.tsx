import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow-right-svgrepo-com.svg";

interface Snippet {
  id: number;
  name: string;
  code: string;
  creation_date: string;
  user: number | null;
}

const SnippetList: React.FC = () => {
  const [snippets, setSnippets] = useState<Snippet[]>([]);

  useEffect(() => {
    const fetchSnippets = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/snippets/");
        setSnippets(response.data);
        console.log(snippets);
      } catch (error) {
        console.error("Ошибка запроса получения сниппетов:", error);
      }
    };

    fetchSnippets();
  }, []);

  return (
    <div>
      <Header />
      <h1>Snippet List</h1>
      <div className="container mt-5">
        <h1>Список сниппетов</h1>
        <table className="table mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Дата создания</th>
            </tr>
          </thead>
          <tbody>
            {snippets.map((snippet) => (
              <tr>
                <td>{snippet.id}</td>
                <td>{snippet.name}</td>
                <td>{snippet.creation_date}</td>
                <Link to={`/snippets/${snippet.id}`}>
                  <a
                    className="icon-link icon-link-hover"
                    href="#"
                  >
                    To Snippet
                  </a>
                </Link>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SnippetList;

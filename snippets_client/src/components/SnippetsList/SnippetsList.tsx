import React, { useEffect, useState } from "react";
import axios from "axios";

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
        console.log(snippets)
      } catch (error) {
        console.error("Ошибка запроса получения сниппетов:", error);
      }
    };

    fetchSnippets();
  }, []);

  return (
    <div>
      <h1>Snippet List</h1>
      <ul>
        {snippets.map((snippet) => (
          <li key={snippet.id}>
            <strong>{snippet.name}</strong>
            <p>{snippet.code}</p>
            <p>Created on: {snippet.creation_date}</p>
            <p>User: {snippet.user || "Anonymous"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SnippetList;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../NavBar/NavBar";
import { useParams } from "react-router-dom";

interface Snippet {
  id: number;
  name: string;
  code: string;
  creation_date: string;
  user: string | null;
}

const SnippetPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [snippets, setSnippets] = useState<Snippet>();

  useEffect(() => {
    const fetchSnippets = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/snippets/${id}`);
        setSnippets(response.data[0]);
        console.log(snippets?.user);
      } catch (error) {
        console.error("Ошибка запроса получения сниппетов:", error);
      }
    };

    fetchSnippets();
  }, []);

  return (
    <div>
      <Header />
      <div className="row">
        <div className="col">
          <form>
            <fieldset disabled>
              <div className="form-group row">
                <div className="col col-8">{snippets?.name}</div>
                <div className="col col-4">{snippets?.user}</div>
              </div>
              <div className="form-group row">
                <div className="col">
                  <code className="python">{snippets?.code}</code>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SnippetPage;

import { useState } from "react";
import moment from "moment";
import axios from "axios";
import { useSelector } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import "./CreateSnippetPage.css";

const CreateSnippetForm = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");

  const userID = useSelector((state: any) => state.userID);

  const handleSubmit = async () => {
    const creationDate = moment().format("YYYY-MM-DD HH:mm:ss");

    const snippetData = {
      name,
      code,
      creation_date: creationDate,
      user: userID,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/create-snippet/",
        snippetData
      );
      console.log("Snippet created:", response.data);
    } catch (error) {
      console.error("Error creating snippet:", error);
    }
  };

  return (
    <div className="page-container"> {/* Применяем класс для общего контейнера */}
      <Sidebar />
      <div className="form-container"> {/* Применяем класс для контейнера с формой */}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="code">
              Code:
            </label>
            <textarea
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <button type="submit">
            Create Snippet
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateSnippetForm;

import { useState } from "react";
import moment from "moment";
import axios from "axios";
import { useSelector } from "react-redux";
import Header from "../NavBar/NavBar";

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
        "http://localhost:8000/api/snippets/",
        snippetData
      );
      console.log("Snippet created:", response.data);
    } catch (error) {
      console.error("Error creating snippet:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="code" className="form-label">
              Code:
            </label>
            <textarea
              className="form-control"
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Create Snippet
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateSnippetForm;

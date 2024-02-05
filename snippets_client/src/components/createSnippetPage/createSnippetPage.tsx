import React, { useState } from 'react';
import moment from 'moment';
import axios from 'axios';
import { useSelector } from 'react-redux';

const CreateSnippetForm = () => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');

  const username = useSelector((state: any) => state.username);

  const handleSubmit = async () => {

    const creationDate = moment().format("YYYY-MM-DD HH:mm:ss");

    const snippetData = {
      name,
      code,
      creation_date: creationDate,
      user: username,
    };

    try {
      const response = await axios.post('http://localhost:8000/api/snippets/', snippetData);
      console.log('Snippet created:', response.data);
    } catch (error) {
      console.error('Error creating snippet:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Code:
          <textarea value={code} onChange={(e) => setCode(e.target.value)} />
        </label>
        <br />
        <button type="submit">Create Snippet</button>
      </form>
    </div>
  );
};

export default CreateSnippetForm;

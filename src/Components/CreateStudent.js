import React, { useState } from "react";
import { Link } from "react-router-dom";
import Services from "../Services";

const CreateStudent = () => {
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);

  const save = async (e, id, name) => {
    debugger;
    e.preventDefault();
    try {
      const data = {
        id: id,
        name: name,
      };
      await Services.saveData(data);
      clearData();
    } catch (error) {
      console.log(error);
    }
  };

  const clearData = () => {
    debugger;
  };
  return (
    <div>
      <h1>ADD</h1>
      <Link to="/student-list">List</Link>
      <form
        onSubmit={(e) => {
          save(e, id, name);
        }}
      >
        <input
          type="text"
          placeholder="id"
          onChange={(e) => setId(("id", e.target.value))}
        />
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(("name", e.target.value))}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default CreateStudent;

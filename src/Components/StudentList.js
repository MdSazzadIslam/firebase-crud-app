import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Services from "../Services";

const StudentList = () => {
  debugger;

  const [students, setStudents] = useState([]);
  //Once components load
  useEffect(() => {
    const data = Services.getAll();
    data.on("value", (snapshot) => {
      const studentRef = snapshot.val();
      const students = [];
      for (let id in studentRef) {
        students.push({ id, ...studentRef[id] });
      }
      setStudents(students);
    });
  }, []);

  const deleteData = async (id) => {
    debugger;
    if (window.confirm("Are you sure to delete this record?")) {
      await Services.delete(id);
    }
  };

  const deleteAllData = async () => {
    debugger;
    if (window.confirm("Are you sure to delete this record?")) {
      await Services.deletAllData();
    }
  };

  return (
    <div className="student-table">
      <h1>List</h1>
      <Link to="/">Add</Link>

      <button
        onClick={() => {
          deleteAllData();
        }}
      >
        Delete All
      </button>

      <table>
        <thead>
          <tr>
            <th>SL</th>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <tr>
              <td>{index}</td>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>
                <Link to={`/Edit-Student/${student.id}/${student.name}`}>
                  Edit
                </Link>
              </td>

              <button
                onClick={() => {
                  deleteData(student.id);
                }}
              >
                Delete
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;

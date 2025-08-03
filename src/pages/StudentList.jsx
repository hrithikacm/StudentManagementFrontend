import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function StudentList() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5001/api/Students")
      .then(response => setStudents(response.data))
      .catch(error => console.error("Error fetching students:", error));
  }, []);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <h2 className="mb-3">STUDENT MANAGEMENT SYSTEM</h2>
      <button className="btn btn-outline-success mb-3" onClick={() => navigate("/add")}>
        Add
      </button>
      <h3>STUDENT LIST</h3>
      <table className="table table-bordered text-center mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Department</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.email}</td>
              <td>{student.department}</td>
              <td>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => navigate(`/edit/${student.id}`)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;





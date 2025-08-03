import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function StudentForm() {
  const [student, setStudent] = useState({ name: "", age: "", email: "", department: "" });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5001/api/Students/${id}`)
        .then(response => setStudent(response.data))
        .catch(error => console.error("Error fetching student:", error));
    }
  }, [id]);

  const handleChange = e => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const url = id
      ? `http://localhost:5001/api/Students/${id}`
      : "http://localhost:5001/api/Students";

    const method = id ? "put" : "post";

    axios[method](url, student)
      .then(() => navigate("/"))
      .catch(error => console.error("Error saving student:", error));
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <h2>{id ? "Edit Student" : "Add Student"}</h2>
      <form onSubmit={handleSubmit} className="w-50">
        <div className="mb-3">
          <label>Name</label>
          <input className="form-control" name="name" value={student.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Age</label>
          <input className="form-control" name="age" type="number" value={student.age} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input className="form-control" name="email" type="email" value={student.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Department</label>
          <input className="form-control" name="department" value={student.department} onChange={handleChange} required />
        </div>
        <button className="btn btn-primary" type="submit">{id ? "Update" : "Add"}</button>
      </form>
    </div>
  );
}

export default StudentForm;







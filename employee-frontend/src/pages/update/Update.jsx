import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    password: ""
  });

  // ✅ Fetch employee details by ID
  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        // 👇 make sure this endpoint matches your Spring Boot controller
        const response = await axios.get(`http://localhost:8081/api/employee/get/${id}`);
        setEmployee(response.data);
      } catch (error) {
        console.error("Error fetching employee:", error);
        alert("❌ Failed to load employee details!");
      }
    };
    fetchEmployee();
  }, [id]);

  // ✅ Handle input changes
  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  // ✅ Handle update form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 👇 correct URL — use your backend update endpoint
      await axios.put(`http://localhost:8081/api/employee/update/${id}`, employee);
      alert("✅ Employee updated successfully!");
      navigate("/"); // back to dashboard
    } catch (error) {
      console.error("Error updating employee:", error);
      alert("❌ Failed to update employee!");
    }
  };

  return (
    <div className="container mt-5 p-4 shadow rounded" style={{ maxWidth: "500px" }}>
      <h2 className="text-center mb-4">Update Employee</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={employee.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={employee.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={employee.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Update Employee
        </button>
      </form>
    </div>
  );
};

export default Update;

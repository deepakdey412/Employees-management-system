import React, { useEffect, useState } from "react";
import { Table, Button, Container, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // ✅ FIXED — must call it as a function

  // ✅ Fetch all employees
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("http://localhost:8081/api/employee/all");
        if (!response.ok) throw new Error("Failed to fetch employees");
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error("Error:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  // ✅ Delete employee
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this employee?")) return;

    try {
      const response = await fetch(`http://localhost:8081/api/employee/delete/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("Employee deleted successfully!");
        setEmployees(employees.filter((emp) => emp.id !== id));
      } else {
        alert("Failed to delete employee");
      }
    } catch (error) {
      console.error("Delete Error:", error.message);
    }
  };

  // ✅ Navigate to update page
  const handleUpdate = (id) => {
    navigate(`/employee/${id}`);
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Employee Dashboard</h2>

      {loading ? (
        <div className="d-flex justify-content-center mt-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : employees.length === 0 ? (
        <h5 className="text-center text-muted">No employees found.</h5>
      ) : (
        <Table striped bordered hover responsive>
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.password}</td>
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    className="me-2"
                    onClick={() => handleUpdate(emp.id)}
                  >
                    Update
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(emp.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default Dashboard;

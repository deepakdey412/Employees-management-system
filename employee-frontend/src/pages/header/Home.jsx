import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark" expand="lg" className="w-100 p-0 m-0">
      <div className="container-fluid">
        <Navbar.Brand to={"/"}><strong>DTech Private Ltd.</strong></Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to={"/employee"} className="nav-link">Dashboard</Nav.Link>
          <Nav.Link as={Link} to={"/"} className="nav-link ">Add Employee</Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
};

export default Home;

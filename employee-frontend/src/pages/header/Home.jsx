import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="home">
      {/* Full-width Navbar */}
      <Navbar bg="primary" variant="dark" expand="lg" sticky="top" className="w-100">
        <div className="container-fluid"> {/* ✅ native bootstrap class */}
          <Navbar.Brand href="#home">DTech Employee</Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      {/* Dummy content to see padding effect */}
      <div className="content">
        <h1>Welcome Deepak 👋</h1>
        <p>This is your full-width navbar setup.</p>
      </div>
    </div>
  );
};

export default Home;

import { Navbar, Container, Nav, } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "../home/Home";
import Contact from "../contact-me/Contact";

function NavMenu() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <NavLink to="/" exact="true">
            <Navbar.Brand>Frameworks - MA 2</Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" exact="true">
                Home
              </NavLink>
              <NavLink to="/contact-me">
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes >
        <Route path="/" exact="true" element={<Home />} />
        <Route path="/contact-me" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default NavMenu;


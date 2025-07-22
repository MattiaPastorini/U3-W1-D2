import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">EpiBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Fantasy">Fantasy</Nav.Link>
            <Nav.Link href="#History">History</Nav.Link>
            <Nav.Link href="#Horror">Horror</Nav.Link>
            <Nav.Link href="#Romance">Romance</Nav.Link>
            <Nav.Link href="#Sci-fi">Sci-fi</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function header_c() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="#home"><img className='icon_header' src="https://cdn-icons-png.flaticon.com/512/12250/12250131.png"/>Retro Games Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Accesorios</Nav.Link>
            <Nav.Link href="#link">Nosotros</Nav.Link>
            <NavDropdown title="Consolas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Playstation</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Xbox</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Nintendo</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Otros</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
  );
}

export default header_c;
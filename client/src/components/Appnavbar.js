import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/appnavbarcss.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Appnavbar() {

  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" className="navBar">
          <Container>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >

              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body className='navBar'>

                <Nav className="justify-content-end flex-grow-1 pe-3">

                  <Nav.Link href="#home" className='text-white navCol'>Home</Nav.Link>
                  
                  <NavDropdown
                    title={<span className='text-white'>Products</span>}
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className='navCol'
                  >
                    <NavDropdown.Item href="#action3">Mobile</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Computer</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Search
                    </NavDropdown.Item>
                  </NavDropdown>
                 

                
                  <Nav.Link href="#pricing" className='text-white navCol'>Search</Nav.Link>

                  <Nav.Link href="#pricing" className='text-white navCol'>My Cart</Nav.Link>

                  <Nav.Link href="#pricing" className='text-white navCol'>My Order</Nav.Link>
                 
                  <Nav.Link href="#pricing" className='text-white navCol'>About</Nav.Link>
                 
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}


    </>

    
  );
}

export default Appnavbar;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/appnavbarcss.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {useNavigate} from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';


function Appnavbar({umail}) {
  const history = useNavigate()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please, Login after use option ...
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => {
            handleClose()
            }}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal> 
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" className="navBar" style={{display: (umail === "admin.admin.5761.@vipworld.com") ? "none":""}}>
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
                  <Nav.Link className='text-white navCol' onClick={()=>history('/')}>Home</Nav.Link>
                  <NavDropdown
                    title={<span className='text-white'>Products</span>}
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className='navCol'
                  >
                    <NavDropdown.Item onClick={()=>{history('/');history('/productshow/Mobile')}}>Mobile</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>{history('/');history('/productshow/Computer')}}>Computer</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>history('/productshow/Mobile Accessories')}>Mobile Accessories</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>history('/productshow/Computer Accsoeries')}>Computer Accssories</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>history('/productshow/Home Appliances')}>Home Appliances</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>history('/productshow/Toys')}>Toys</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/search">
                      Search
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link onClick={()=>history('/search')} className='text-white navCol'>Search</Nav.Link>
                  <Nav.Link onClick={()=>{
                      if (umail === ""){
                          handleShow()
                      }
                      else {
                        history('/mycart')
                      }
                   
                    
                    }} className='text-white navCol'>Cart</Nav.Link>
                  <Nav.Link onClick={()=>{
                    if (umail === ""){
                      handleShow()
                    }
                    else {
                      history('/myorder')
                    }
                    
                    
                    }} className='text-white navCol'>Order</Nav.Link>             
                  <Nav.Link onClick={()=>history('/about')} className='text-white navCol'>About</Nav.Link>
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
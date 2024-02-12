import React from 'react'
import '../css/headercss.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



const Header = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary" className='app'>
        <Container className='con'>
          <Navbar.Brand href="#home">
          <p className='logo' >VIP<span>World</span></p>
          </Navbar.Brand>
          <p className='username'>Hello, Ragavan</p>
        </Container>
      </Navbar>
    </>

  )
}

export default Header
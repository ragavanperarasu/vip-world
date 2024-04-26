import React from 'react'
import '../css/appaboutcss.css'
import logo from './LOGO.png';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from "react-router-dom";

const Appabout = () => {
  const history = useNavigate()
  return (
    
      <Container>
        <div style={{display:'flex', justifyContent:'center'}}>
          <img alt='logo' src={logo} style={{width:'600px', height:'300px'}}/>
        </div>
        <br /><br />
        <Card className="text-center">
      <Card.Header>VIP World</Card.Header>
      <Card.Body>
        <Card.Title>Introduction</Card.Title>
        <Card.Text>
        E-commerce, or electronic commerce, refers to the buying and selling of goods and services over the internet. It involves the use of electronic platforms, such as websites, mobile applications, and social media, to conduct transactions between businesses and consumers or between businesses. E-commerce has revolutionized the way businesses operate and has created new opportunities for entrepreneurs and consumers alike.
        </Card.Text>
        <Button variant="primary" onClick={()=>history('/')}>Go To Shoping</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Less Time Buy More</Card.Footer>
    </Card>
        
        <br /><br />
      </Container>

  )
}

export default Appabout
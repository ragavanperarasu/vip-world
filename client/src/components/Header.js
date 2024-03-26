import React, {useState} from 'react'
import '../css/headercss.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import axios from 'axios'



const Header = ({umail}) => {

  const [hname, setHname] = useState("To Our Site")
  const [log, setLog] = useState("Login")
  
  const client = axios.create({
    baseURL: "http://localhost:5000/" 
  });

  if (umail !== "") {
    const email = {email:umail}
    client.post("user", email).then((res)=>{
        
      console.log(res.data) 
      setHname(res.data)
      setLog("Log Out") 
      
    }).catch((error)=>{
      console.log(error)
    })
  }

  return (
    <>
      <Navbar className="bg-body-tertiary" className='app'>
        <Container className='con'>
          <Navbar.Brand href="#home">
          <p className='logo' >VIP<span>World</span></p>
          </Navbar.Brand>
          <p className='username'>Welcome {hname}</p>
          <Button variant="outline-light" className='loginButton' href='/login'>{log}</Button>
        </Container>
      </Navbar>
    </>

  )
}

export default Header
import React, {useState} from 'react'
import '../css/headercss.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
/* import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; */

import server from './../server.js'
/* import Cookies from 'js-cookie'; */



const Header = ({umail, setUmail}) => {

  const [hname, setHname] = useState("To Our Site")
  const [log, setLog] = useState("Login")

  /* Cookies.set('umail', "ragaan"); */

/*   if (Cookies.get('umail') !== undefined && Cookies.get('uname') !== undefined) {
    console.log("user name cookies used")
    setHname(Cookies.get('uname'))
  }  */
  if (umail !== "") {
    console.log("user name server trigger")
    const email = {email:umail}
    server.post("user", email).then((res)=>{
        
     /*  Cookies.set('uname',res.data) */
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
        
    
{/*           <Row style={{border:'5px solid red'}} className='app'>

            <Col >
            <p className='logo' >VIP<span>World</span></p>
            </Col>
            <Col >
            <p className='username'>Welcome {hname}</p>
            </Col>
            <Col>
            <Button variant="outline-light" className='loginButton' href='/login'>{log}</Button>
            </Col>
          </Row> */}
         
          
          
          
          
       
    </>

  )
}

export default Header
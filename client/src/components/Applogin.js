import React,{useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom";

import Button from 'react-bootstrap/Button';
import '../css/applogincss.css'
import Form from 'react-bootstrap/Form';
import server from './../server.js'
import Cookies from 'js-cookie';



const Applogin = ({ setUmail }) => {

  useEffect(() => {

      Cookies.remove('umail')
   
  }, []);

  const history = useNavigate()
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [bg, setBg] = useState("#1A2238")
  const [err, setErr] = useState("")


  const handleSubmit = (e) => {
    
    e.preventDefault()

    const data = {
      email:email,
      pass:pass
    }

    server.post("login",data).then((res)=>{
      
    
      if (res.data === 'not valid') {
        setBg("not valid")
        setErr("Invalid User Please Enter Correct Data")
      }
      else if (res.data === 'admin') {
        setBg("#1A2238")
        setUmail(email)
        history('/admin')
      }
      else {
        setBg("#1A2238")
        setUmail(email)
        Cookies.set('umail', email);
        history('/') 
      }
      
      
    }).catch((error)=>{
      console.log(error)
    })

  }
  return (
  
    <div className='loginouter'>
      <div className='loginboxbox'>
        <p className='loginlogo' >VIP<span>World</span></p>
          <Form className='formlogin'>
            <Form.Group className="mb-3" controlId="formGroupEmail"
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required value={email} onChange={
                (e) => {
                  setEmail(e.target.value)
                  setBg("#1A2238")
                  setErr("")
                }} style={{borderColor: bg === 'not valid' ? 'red':'#1A2238',borderWidth:"2px"}}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required value={pass} onChange={
                (e) => {
                  setPass(e.target.value)
                  setBg("#1A2238")
                  setErr("")
                }} style={{borderColor: bg === 'not valid' ? 'red':'#1A2238',borderWidth:"2px"}}/>
            </Form.Group>

            <p style={{color:"#DC4C64", margin:"1px", padding:"1px",textAlign:"center"}}>{err}</p>

            <Button variant="primary" type="submit" className='submitbut' onClick={handleSubmit}>
              Login
            </Button>
            <Button variant="primary" className='createuserbut' href='/createuser'>
              Create New Account
            </Button>
          </Form>

      </div>
    </div>
  )
}

export default Applogin
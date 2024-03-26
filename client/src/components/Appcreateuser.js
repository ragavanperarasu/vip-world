import React from 'react'
import {useState} from 'react'
import {useNavigate} from "react-router-dom";
import axios from 'axios'

import Button from 'react-bootstrap/Button';
import '../css/appcreateusercss.css'
import Form from 'react-bootstrap/Form';

const Appcreateuser = () => {
  const history = useNavigate()
  const [nfname, setNFname] = useState("")
  const [nlname, setNLname] = useState("")
  const [nphone, setNPhone] = useState("")
  const [nemail, setNEmail] = useState("")
  const [npass, setNPass] = useState("")
  const [nrpass, setNRPass] = useState("")
  const [err, setErr] = useState("")
  const [bg, setBg] = useState("#1A2238")
  const client = axios.create({
    baseURL: "http://localhost:5000/" 
  });

  function handleSubmit(e) {
    e.preventDefault()
    if (npass !== nrpass) {
      setBg("pass not match")
      setErr("Incorrect Password Pleace Recheck")
    }
    else if (npass.length < 5) {
      setBg("pass not match")
      setErr("Password Above 5 Character")
    }
    else if (nfname === "") {
      setBg("fname")
      setErr("Please Enter First Name")
    }
    else if (nlname === "") {
      setBg("lname")
      setErr("Please Enter Last Name")
    }
    else if (nphone === "") {
      setBg("phone")
      setErr("Please Enter Phone Number")
    }
    else if (nphone.length !== 10) {
      setBg("phone")
      setErr("This Phone Number Not Exists")
    }
    else {
      const data = {
        fname:nfname,
        lname:nlname,
        phone:nphone,
        email:nemail,
        pass:npass
      }
      client.post("newuser",data).then((res)=>{
        console.log(res);

        if (res.data === "email not valid") {
          setBg("email not valid")
          setErr("Email ID Already Exisit")
        }
        else if (res.data === "phone not valid") {
          setBg("phone")
          setErr("Phone Number Already Exisit")
        }
        else if (res.data === "add successfully") {
          history('/login') 
        }
      }).catch((error)=>{
        console.log(error)
      })


    }
    
  }
  return (
    <div className='loginouter'>
      <div className='loginbox'>
        <p className='loginlogo' >VIP<span>World</span></p>
          <Form className='formlogin'>

            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Control size='sm' type="text" placeholder="First Name" required name='fname'
              value={nfname} onChange={(e)=>{
                setNFname(e.target.value)
          
          
              }} style={{borderColor: bg === 'fname' ? 'red':'#1A2238',borderWidth:"2px"}}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Control size='sm' type="text" placeholder="Last Name" required name='lname'
              value={nlname} onChange={(e)=>{
                setNLname(e.target.value)
                
              }} style={{borderColor: bg === 'lname' ? 'red':'#1A2238',borderWidth:"2px"}}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Control size='sm'  type="number" placeholder="Phone Number" required name='phone'
              value={nphone} onChange={(e)=>{
                setNPhone(e.target.value)
          
              }} style={{borderColor: bg === 'phone' ? 'red':'#1A2238',borderWidth:"2px"}}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">           
              <Form.Control size='sm' type="email" placeholder="Enter email" required name='email'
              value={nemail} onChange={(e)=>{
                setNEmail(e.target.value)
                setBg("#1A2238")
                setErr("")
              }} style={{borderColor: bg === 'email not valid' ? 'red':'#1A2238',borderWidth:"2px"}}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Control size='sm' type="password" placeholder="Password" required name='pass'
              value={npass} onChange={(e)=>{
                setNPass(e.target.value)
                setBg("#1A2238")
                setErr("")
              }} style={{borderColor: bg === 'pass not match' ? 'red':'#1A2238',borderWidth:"2px"}}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">           
              <Form.Control size='sm' type="password" placeholder="Re-Enter Password" required name='rpass'
              value={nrpass} onChange={(e)=>{
                setNRPass(e.target.value)
                setBg("#1A2238")
                setErr("")
              }} style={{borderColor: bg === 'pass not match' ? 'red':'#1A2238',borderWidth:"2px"}}/>
            </Form.Group>

            <p style={{color:"#DC4C64", margin:"1px", padding:"1px",textAlign:"center"}}>{err}</p>
            
            <Button variant="primary" type="submit" className='submitbut' onClick={handleSubmit}>
              Submit
            </Button>
          </Form>

      </div>
    </div>
  )
}

export default Appcreateuser
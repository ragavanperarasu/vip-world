import React from 'react'
import '../css/appsearchcss.css'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Appsearch = () => {
  return (
    <div className='search'>
    <Container style={{display:'flex', height:"85vh", justifyContent:'center', alignItems:'center'}} >
      <br /><br />
      <InputGroup className="mb-3" size='lg'>
        <Form.Control aria-label="Text input with dropdown button" placeholder='Search Box'/>
        <Button variant="outline-secondary" id="button-addon2" style={{backgroundColor:'#DC4C64', color:'white'}}>
          Search
        </Button>


        
      </InputGroup>
      <br /><br />
    </Container></div>
  )
}

export default Appsearch
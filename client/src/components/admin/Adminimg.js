import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {useParams} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';

const Adminimg = () => {

  const history = useNavigate()

  const params = useParams();

  
  const client = axios.create({
    baseURL: "http://localhost:5000/" 
  });

  const [file, setFile] = useState({});
  const [image, setImage] = useState(null);
  const [c, setC] = useState(0)

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  }
  const handleShow = () => setShow(true);

  const [showA, setShowA] = useState(false);

  const handleCloseA = () => {
    setShowA(false);
     history(`/admin`) 
  }
  const handleShowA = () => setShowA(true);

  const handleSubmit = () => {
    if (c === 0){
      handleShow()
    }
    else {
      const formData = new FormData();
      formData.append('image', file);
      formData.append('col', params.col);
      formData.append('id', params.id);
      formData.append('show', params.show);
      
      client.post('upload', formData, {headers:{'Content-Type': 'multipart/form-data'}}).then((res)=>{
      setC(0)
      handleShowA()

      }).catch((e)=>{
        console.log(e)
      })}
 
  };

  return (
      
    <> 
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Image Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please, select Image after Upload...
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal> 

      <Modal
        show={showA}
        onHide={handleCloseA}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Image Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This Image added Successfully...
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseA}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal> 
      <Container>
        <br /><br />
        <Row>
          <Col>
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Label>Select Any One Image File " jpg, jpeg, png "</Form.Label>
              <br />
              <Form.Control type="file" size="lg" onChange={(e)=>{
                setFile(e.target.files[0]);
                setImage(URL.createObjectURL(e.target.files[0]))
                setC(1)
              }} accept='.jpg, .jpeg, .png'/>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>

            <div className="d-grid gap-2">
              <Button variant="primary" size="lg" onClick={handleSubmit}>
                Upload
              </Button>
            </div>
          </Col>
        </Row>
        <br /><br />
        <Row>
          <Col>
              <h3 style={{textAlign:"center"}}>Priview the Image</h3>
              <div style={{display:'flex', justifyContent:'center'}}>
              <div style={{border:"2px solid gray", borderRadius:"20px", height:"405px", width:"401px"}}>
                <Image src={image} fluid style={{borderRadius:"20px", height:"400px", width:"401px" }}/>
              </div>
              </div>
            
          </Col>
        </Row>
      </Container>


          
          

          <br /><br /> <br /><br />
    </> 
  );
}

export default Adminimg
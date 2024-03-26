import React,{useState, useEffect} from 'react'
import '../css/appsearchcss.css'
import axios from 'axios'
import {useNavigate} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Appmycart = ({umail}) => {

  const client = axios.create({
    baseURL: "http://localhost:5000/" 
  });

  const history = useNavigate()

  const [d, setD] = useState([])
  const [noorder, setNoorder] = useState({padding:"0px"})
  
 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showc, setShowc] = useState(false);
  const handleClosec = () => setShowc(false);
  const handleShowc = () => setShowc(true);

  useEffect(() => {
    const data = {
        umail:umail
    }
  
    client.post('mycart',data).then((response) => {
     
      if ((response.data.cart).length === 0){
        handleShow()
        setNoorder({padding:"200px"})
      }
  
      setD(response.data.cart)
  
        
    })
      .catch((error) => {
        // Handle the error
        console.error("Error fetching data: ", error);
      });
  
  
  }, []);

  function myCartDel(cid){
    const data = {
      umail:umail,
      cid:cid
    }

  client.post('mycartdel',data).then((response) => {
    if (response.data.acknowledged === true){
      handleShowc()
    }

      
  })
    .catch((error) => {
      // Handle the error
      console.error("Error fetching data: ", error);
    });

  }

  return (
    <>
    <p style={noorder}></p>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Cart Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Sorry, Your Cart is Empty. So, Can't show this Page ...
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => {
            handleClose()
            history('/')
            }}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal> 

      <Modal
        show={showc}
        onHide={handleClosec}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Cart Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your Product Deleted Successfully ...
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => {
            handleClosec()
            history('/')
            }}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
    <br />
    <Container>
      
      {d.map((p) => (

       <Row style={{marginTop:'20px'}}>
        <Col>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" active style={{backgroundColor:"#9DAAF2", borderWidth:"0"}}>
                        Cart Details
                    </ListGroup.Item>
                    <ListGroup.Item as="li">Cart ID   : {p.cid}</ListGroup.Item>
                    <ListGroup.Item as="li">Product ID : {p.pid}</ListGroup.Item>
                    <ListGroup.Item as="li">Product Name : {p.pname}</ListGroup.Item>
                    <ListGroup.Item as="li">Product Catagory  : {p.pcat}</ListGroup.Item>
                    <ListGroup.Item as="li">Product Price  : {p.pprice}</ListGroup.Item>
                    <ListGroup.Item as="li">
                    <div className="d-grid gap-2">
                      <Button variant="primary"  style={{backgroundColor:"#DC4C64", borderWidth:"0"}} onClick={() => {

                        history(`/productview/${p.pid}/${p.pcat}`)

                      }}>
                        View Product
                      </Button>
                      </div>
                    </ListGroup.Item>

                    <ListGroup.Item as="li">
                    <div className="d-grid gap-2">
                      <Button variant="primary"  style={{backgroundColor:"#1A2238", borderWidth:"0"}} onClick={() => {
                       
                       myCartDel(p.cid)
                       

                      }}>
                        Delete Product
                      </Button>
                      </div>
                    </ListGroup.Item>
                </ListGroup>
              
              
                    
               
            
        </Col>
       </Row>
      
        
        
      ))}
    </Container><br /><br /><br />
    </>
  )
}

export default Appmycart
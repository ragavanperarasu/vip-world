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

const Appmyorder = ({umail}) => {
  const client = axios.create({
    baseURL: "http://localhost:5000/" 
});

  const history = useNavigate()

  const [d, setD] = useState([])
  const [noorder, setNoorder] = useState({padding:"0px"})
  
 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
  const data = {
      umail:umail
  }

  client.post('myorder',data).then((response) => {
   
    if ((response.data.buy).length === 0){
      handleShow()
      setNoorder({padding:"200px"})
    }

    setD(response.data.buy)

    
      
    })
    .catch((error) => {
      // Handle the error
      console.error("Error fetching data: ", error);
    });


}, []);



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
          <Modal.Title>Order Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Sorry, Your order is Empty. So, Can't show this Page ...
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
    <br /><br />
    <Container>
      
      {d.map((p) => (

       <Row style={{marginTop:'20px'}}>
        <Col>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" active style={{backgroundColor:"#9DAAF2", borderWidth:"0"}}>
                        Order Details
                    </ListGroup.Item>
                    <ListGroup.Item as="li">Order ID   : {p.oid}</ListGroup.Item>
                    <ListGroup.Item as="li">Order Date : {p.odate}</ListGroup.Item>
                    <ListGroup.Item as="li">Payment Type : {p.payo}</ListGroup.Item>
                    <ListGroup.Item as="li">Total Price  : {p.pprice * p.pqu}</ListGroup.Item>
                    <ListGroup.Item as="li">
                    <div className="d-grid gap-2">
                      <Button variant="primary"  style={{backgroundColor:"#DC4C64", borderWidth:"0"}} onClick={() => {

                        history(`/myordershow/${p.oid}/${p.odate}/${p.pid}/${p.pname}/${p.pcat}/${p.pprice}/${p.pqu}/${p.payo}/${p.door}/${p.street}/${p.landm}/${p.area}/${p.distric}/${p.state}/${p.pincode}/${p.phone}/${p.aphone}`)

                      }}>
                        View Full Details
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

export default Appmyorder
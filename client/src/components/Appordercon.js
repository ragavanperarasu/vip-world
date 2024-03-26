
import {useParams} from 'react-router-dom';
import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from "react-router-dom";

const Appordercon = ({umail}) => {
    const client = axios.create({
        baseURL: "http://localhost:5000/" 
    });
    const history = useNavigate()
    const params = useParams();
    const pprice = Number(params.pprice)

    const address = `${params.door}, ${params.street}, ${params.landm}, ${params.area}, ${params.distric}, ${params.state} - ${params.pincode}`
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleBuy() {
        const data = {
            pid : params.pid,
            pname : params.pname,
            pcat : params.pcat,
            pprice : params.pprice,
            pqu : params.pq,
            payo : params.payo,
            door : params.door,
            street : params.street,
            landm : params.landm, 
            area : params.area,
            distric : params.distric,
            state : params.state,
            pincode : params.pincode,
            phone : params.pho,
            aphone : params.apho,
            umail: umail
        }
        client.post("neworder",data).then((res)=>{
            if (res.data === true) {
                handleShow()
            }
        }).catch((error)=>{
            console.log(error)
        })
    }
  return (
    <>
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
          Your Order Submitted Successfully ...
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
        <br />
        <Container>
            <Row>
                <Col>
                    <ListGroup as="ul">
                        <ListGroup.Item as="li" active style={{backgroundColor:"#9DAAF2", borderWidth:"0"}}>
                            <h4 style={{textAlign:'center'}}>Check Details</h4>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <ListGroup as="ul">
                        <ListGroup.Item as="li" active style={{backgroundColor:"#9DAAF2", borderWidth:"0"}}>
                            Product Details
                        </ListGroup.Item>
                        <ListGroup.Item as="li">ID       : {params.pid}</ListGroup.Item>
                        <ListGroup.Item as="li">Name     : {params.pname}</ListGroup.Item>
                        <ListGroup.Item as="li">Catagory : {params.pcat}</ListGroup.Item>
                        <ListGroup.Item as="li">Price    : {pprice}</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <ListGroup as="ul">
                        <ListGroup.Item as="li" active style={{backgroundColor:"#9DAAF2", borderWidth:"0"}}>
                            Buying Options
                        </ListGroup.Item>
                        <ListGroup.Item as="li">Product Amount : {pprice}</ListGroup.Item>
                        <ListGroup.Item as="li">Delivery Amount : Free</ListGroup.Item>
                        <ListGroup.Item as="li">Quantity        : {params.pq}</ListGroup.Item>
                        <ListGroup.Item as="li">Total Amount :  {pprice * Math.round(Number(params.pq))}</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <ListGroup as="ul">
                        <ListGroup.Item as="li" active style={{backgroundColor:"#9DAAF2", borderWidth:"0"}}>
                            Payment Options
                        </ListGroup.Item>
                        <ListGroup.Item as="li">{params.payo}</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <ListGroup as="ul">
                        <ListGroup.Item as="li" active style={{backgroundColor:"#9DAAF2", borderWidth:"0"}}>
                        Delivery Address
                        </ListGroup.Item>
                        <ListGroup.Item as="li">{address}</ListGroup.Item>
                        <ListGroup.Item as="li">Phone Number : {params.pho}</ListGroup.Item>
                        <ListGroup.Item as="li">Another Phone Number : {params.apho}</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <br />
            <Row>
            <div className="d-grid gap-2">
                    <Button variant="primary" size="lg" style={{backgroundColor:"#DC4C64", borderWidth:"0"}} onClick={handleBuy}>
                    Buy Now
                    </Button>
               </div>
            </Row>
            <br /><br />
        </Container>
    </>
  )
}

export default Appordercon
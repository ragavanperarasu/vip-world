import React,{useState} from 'react'
import '../css/appsearchcss.css'
import {useNavigate} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import {useParams} from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import server from './../server.js'
import Modal from 'react-bootstrap/Modal';

const Appmyordershow = ({umail}) => {
    const history = useNavigate()

    const params = useParams();
    
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => setShow(true);

    const address = `${params.door}, ${params.street}, ${params.landm}, ${params.area}, ${params.distric}, ${params.state} - ${params.pincode}`
    function orderCancel(){
        const data = {
            umail:umail,
            oid:Number(params.oid)
        }
        server.post('myordercancle',data).then((res) => {
            if (res.data.acknowledged === true) {
                handleShow()
            }
        }).catch((error) => {
            // Handle the error
            console.error("Error fetching data: ", error);
          });
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
          Your Canceled Successfully ...
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={()=>{
            handleClose()
            history('/')
            }}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal> 
        <br /> <br />
        <Container>
            <Row>
                <Col>
                    <ListGroup as="ul">
                        <ListGroup.Item as="li" active style={{backgroundColor:"#9DAAF2", borderWidth:"0"}}>
                            <h4 style={{textAlign:'center'}}>Order</h4>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <ListGroup as="ul">
                        <ListGroup.Item as="li" active style={{backgroundColor:"#9DAAF2", borderWidth:"0"}}>
                            <h5 style={{textAlign:'center'}}>Order Stauts</h5>
                        </ListGroup.Item>
                        
                        <ListGroup.Item as="li" style={{padding:"50px"}}><ProgressBar now={15} />
                        
                            <Row>
                                <Col>Ordere Placed</Col>
                                <Col>Ordere Confirm</Col>
                                <Col>Shipped</Col>
                                <Col>Out For Delivery</Col>
                                <Col>On The Way</Col>
            
                            </Row>
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
                        <ListGroup.Item as="li">Product ID : {params.pid}</ListGroup.Item>
                        <ListGroup.Item as="li">Name       : {params.pname}</ListGroup.Item>
                        <ListGroup.Item as="li">Catagory   : {params.pcat}</ListGroup.Item>
                        <ListGroup.Item as="li">Price      : {params.pprice}</ListGroup.Item>
                        <ListGroup.Item as="li">
                            <div className="d-grid gap-2">
                            <Button variant="primary"  style={{backgroundColor:"#DC4C64", borderWidth:"0"}} onClick={() => {

                         history(`/productview/${params.pid}/${params.pcat}`)

                            }}>
                        View Product
                      </Button>
                      </div>
                    </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <ListGroup as="ul">
                        <ListGroup.Item as="li" active style={{backgroundColor:"#9DAAF2", borderWidth:"0"}}>
                            Order Detail
                        </ListGroup.Item>
                        <ListGroup.Item as="li">Order ID        : {params.oid}</ListGroup.Item>
                        <ListGroup.Item as="li">Order Date      : {params.odate}</ListGroup.Item>
                        <ListGroup.Item as="li">Quantity        : {params.pqu}</ListGroup.Item>
                        <ListGroup.Item as="li">Total Amount :  {Number(params.pprice) * Math.round(Number(params.pqu))}</ListGroup.Item>
                        <ListGroup.Item as="li">Payment Options : {params.payo}</ListGroup.Item>
                        <ListGroup.Item as="li">
                            <div className="d-grid gap-2">
                            <Button variant="primary"  style={{backgroundColor:"#1A2238", borderWidth:"0"}} onClick={orderCancel}>
                        Cancel My Order
                      </Button>
                      </div>
                    </ListGroup.Item>
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
                        <ListGroup.Item as="li">Delivery Address : {address}</ListGroup.Item>
                        <ListGroup.Item as="li">Phone Number : {params.phone}</ListGroup.Item>
                        <ListGroup.Item as="li">Another Phone Number : {params.aphone}</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <br />
            <Row>
            <div className="d-grid gap-2">
                    <Button variant="primary" size="lg" style={{backgroundColor:"#DC4C64", borderWidth:"0"}} onClick={()=>{history(-1)}}>Go Back</Button>
               </div>
            </Row>
            <br /><br />
        </Container><br /> <br />
        </>
    )
}   

export default Appmyordershow
import React,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import {useParams} from 'react-router-dom';
import server from './../server.js'
import {useNavigate} from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import serverip from './serverip.js'





const Appproductview = ({umail}) => {

    const params = useParams();
    const history = useNavigate()

    const [pid, setPid] = useState(0)
    const [pcat, setPcat]= useState("")
    const [pname, setPname]= useState("")
    const [pprice, setPprice]= useState("")
    const [pbrand, setPbrand]= useState("")
    const [porg, setPorg]= useState("")
    const [pdet, setPdet]= useState("")
    const [pimg, setPimg]= useState("")


    function l () {
        const data = {
          pcat:params.pcat,
          pid:params.id
        }
        
        server.post("productview",data).then((res)=>{
          
          setPid(res.data.pid)
          setPcat(res.data.pcat)
          setPname(res.data.pname)
          setPprice(res.data.pprice)
          setPbrand(res.data.pbrand)
          setPorg(res.data.porg)
          setPdet(res.data.pdet)
          setPimg(res.data.img)

        }).catch((error)=>{
          console.log(error)
        })
    }
    l()
    const [showc, setShowc] = useState(false);
    const handleClosec = () => setShowc(false);
    const handleShowc = () => setShowc(true);

    function myCart(){
      const data = {
        umail:umail,
        pid:pid,
        pname:pname,
        pcat:pcat,
        pprice:pprice
      }
      server.post("newcart",data).then((res)=>{
        if (res.data === true){
          handleShowc()
        }
      }).catch((error)=>{
        console.log(error)
      })

    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    function handleAddCart(){
        if (umail === "") {
            handleShow()
        }
        else {
          myCart()
        }
    }

    function handleBuy(){
        if (umail === ""){
            handleShow()
        }
        else {
            history(`/buyproduct/${pid}/${pname}/${pcat}/${pprice}`)
        }
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
          <Modal.Title>Login Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please, Login after use this option ...
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
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
          <Modal.Title>Cart Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Product Added Successfully ...
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClosec}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>

    <br />
    <Container>
      <Row>
        <Col>
            <Card>
                <Carousel>
                <Carousel.Item>
                <img className="d-block w-100" src={(pimg).replace('localhost', serverip)} alt="Second slide" style={{height:"500px", width:"700px"}}/>
                </Carousel.Item>

                <Carousel.Item>
                <img className="d-block w-100" src={(pimg).replace('localhost', serverip)} alt="Second slide" style={{height:"500px", width:"700px"}}/>
                </Carousel.Item>
                </Carousel>
            </Card>
        </Col>
        <Col>
        <Card>
                <Card.Body>
                    <Card.Text>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Product ID : {pid}</ListGroup.Item>
                            <ListGroup.Item>Category   : {pcat}</ListGroup.Item>
                            <ListGroup.Item>Name   : {pname}</ListGroup.Item>
                            <ListGroup.Item>Price  : {pprice}</ListGroup.Item>
                            <ListGroup.Item>Brand  : {pbrand}</ListGroup.Item>
                            <ListGroup.Item>Origin : {porg}</ListGroup.Item>
                            <ListGroup.Item>Detail : {pdet}</ListGroup.Item>
                        </ListGroup>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
      </Row>

      <br /><br />
      <Row>
        <Col> 
            <div className="d-grid gap-2">
                <Button variant="primary" size="lg" style={{backgroundColor:"#DC4C64", borderWidth:"0"}} onClick={handleBuy}>
                    Buy Now
                </Button>
            </div>
        </Col>
        <Col> 
            <div className="d-grid gap-2">
                <Button variant="primary" size="lg" style={{backgroundColor:"#1A2238", borderWidth:"0"}} onClick={handleAddCart}>
                    Add Cart
                </Button>
            </div>
        </Col>
      </Row>
    </Container>



    <br /><br />
  </>
  )
}

export default Appproductview
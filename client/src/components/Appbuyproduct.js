
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import {useParams} from 'react-router-dom';
import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";



const Appbuyproduct = () => {
    const history = useNavigate()
    const params = useParams();
    const pprice = Number(params.pprice)
    const [pq, setPq] = useState(1)

    const [door, setDoor] = useState("")
    const [street, setStreet] = useState("")
    const [area, setArea] = useState("")
    const [distric, setDistric] = useState("")
    const [state, setState] = useState("")
    const [pincode, setPincode] = useState("")
    const [landm, setLandm] = useState("")

    const [phone, setPhone] = useState("")
    const [aphone, setAphone] = useState("")

    const [paymentop, setPaymentop] = useState("")

    const [err, setErr] = useState("")

    const [address, setAddress] = useState("")

    function handleBuy(e) {
        e.preventDefault()

        if (door === "" || street === "" || area === "" || 
        distric === "" || state === "" || pincode === "" ||
        landm === "" || phone === "" || aphone === "" || 
        paymentop === "") {
            setErr("Please, All Data Requirments ...")
        }
        else if (phone.length !== 10 || aphone.length !== 10 ){
            setErr("Please, Check your Phone number...")
        }
        else {
            setAddress(`${door}, ${street}, ${landm}, ${area}, ${distric}, ${state} - ${pincode}`)

/*             history(`/orderconfirm/${params.id}/${params.pname}/
            ${params.pcat}/${params.pprice}/${pq}/${paymentop}/${address}/${phone}/${aphone}`) */
            history(`/orderconfirm/${params.id}/${params.pname}/
            ${params.pcat}/${params.pprice}/${pq}/${paymentop}/
            ${phone}/${aphone}/${door}/${street}/${area}/${distric}/
            ${state}/${pincode}/${landm}`)
        }
    }
    
  return (
    <>
        <br />
        <Container>
            <Row>
                <Col>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" active style={{backgroundColor:"#DC4C64", borderWidth:"0"}}>
                        Product Details
                    </ListGroup.Item>
                    <ListGroup.Item as="li">ID       : {params.id}</ListGroup.Item>
                    <ListGroup.Item as="li">Name     : {params.pname}</ListGroup.Item>
                    <ListGroup.Item as="li">Catagory : {params.pcat}</ListGroup.Item>
                    <ListGroup.Item as="li">Price    : {pprice}</ListGroup.Item>
                </ListGroup>
                </Col>
                <Col>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" active style={{backgroundColor:"#1A2238", borderWidth:"0"}}>
                        Buying Options
                    </ListGroup.Item>
                    <ListGroup.Item as="li">Product Amount : {pprice}</ListGroup.Item>
                    <ListGroup.Item as="li">Delivery Amount : Free</ListGroup.Item>
                    <ListGroup.Item as="li">Quantity        : 
                    <input type='number' value={pq} onChange={(e) => {
                    
                        setPq(e.target.value)
                      
                      
                    }} style={{marginLeft:"10px"}}/>
                    </ListGroup.Item>
                    <ListGroup.Item as="li">Total Amount :  {pprice * Math.round(pq)}</ListGroup.Item>

                    
                </ListGroup>
                </Col>
                
            </Row>
            <br />
            <Row>
                <Col>
                    <ListGroup as="ul">
                        <ListGroup.Item as="li" active style={{backgroundColor:"#DC4C64", borderWidth:"0"}}>
                            Payment Options
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <Form.Check type="radio" aria-label="radio 1" label='Cash-On Delivery' name='paymet' onChange={()=>{
                                setPaymentop("Cash-on Delivery")
                                setErr("")
                            }}/> 
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <Form.Check type="radio" aria-label="radio 1" label='Net Banking ( Currently Unavailable )' name='paymet' disabled/> 
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <Form.Check type="radio" aria-label="radio 1" label='Credit Card ( Currently Unavailable )' name='paymet' disabled/> 
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <Form.Check type="radio" aria-label="radio 1" label='Debit Card ( Currently Unavailable )' name='paymet' disabled/> 
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <Form.Check type="radio" aria-label="radio 1" label='UPI Paymet ( Currently Unavailable )' name='paymet' disabled/> 
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <ListGroup as="ul">
                        <ListGroup.Item as="li" active style={{backgroundColor:"#DC4C64", borderWidth:"0"}}>
                            Delivery Address
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <Form.Control  type="text" placeholder="Door Number" value={door} onChange={(e) => {
                                setDoor(e.target.value)
                                setErr("")
                            }}/> 
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <Form.Control  type="text" placeholder="Street Name" value={street} onChange={(e) => {
                                setStreet(e.target.value)
                                setErr("")
                            }} /> 
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <Form.Control  type="text" placeholder="Area Name" value={area} onChange={(e) => {
                                setArea(e.target.value)
                                setErr("")
                            }} /> 
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <Form.Control  type="text" placeholder="Distric Name" value={distric} onChange={(e) => {
                                setDistric(e.target.value)
                                setErr("")
                            }} /> 
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <Form.Control  type="text" placeholder="State Name" value={state} onChange={(e) => {
                                setState(e.target.value)
                                setErr("")
                            }} /> 
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <Form.Control  type="number" placeholder="Pin code" value={pincode} onChange={(e) => {
                                setPincode(e.target.value)
                                setErr("")
                            }} /> 
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <Form.Control  type="text" placeholder="Landmark"  value={landm} onChange={(e) => {
                                setLandm(e.target.value)
                                setErr("")
                            }}/> 
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <Form.Control  type="number" placeholder="Mobile Number" value={phone} onChange={(e) => {
                                setPhone(e.target.value)
                                setErr("")
                            }}/> 
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            <Form.Control  type="number" placeholder="Another Mobile Number" value={aphone} onChange={(e) => {
                                setAphone(e.target.value)
                                setErr("")
                            }} /> 
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <br /><br />
            <Row>
            <Col>
            <h5 style={{color:"#DC4C64", margin:"1px", padding:"1px",textAlign:"center"}}>{err}</h5>
            <br />
            <div className="d-grid gap-2">
                <Button variant="primary" size="lg" style={{backgroundColor:"#DC4C64", borderWidth:"0"}} onClick={handleBuy}>
                    Buy Now
                </Button>
            </div>
            </Col>
            </Row>
        </Container>
        <br /><br />
    </>
  )
}

export default Appbuyproduct
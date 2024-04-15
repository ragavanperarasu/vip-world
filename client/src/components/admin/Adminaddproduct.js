import React, {useState} from 'react'
import '../../css/font.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import server from './../../server.js'
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from "react-router-dom";



const Adminaddproduct = () => {
  const history = useNavigate()
  


    const [pCategory, setPCategory] = useState("")
    const [pName, setPName] = useState("")
    const [pPrice, setPPrice] = useState(0)
    const [pBrand, setPBrand] = useState("")
    const [pOrigin, setPOrigin] = useState("")
    const [pDetails, setPDetails] = useState("")
    const [adminPIN, setAdminPIN] = useState("")
    const [pShow, setPShow] = useState("")
    const [err, setErr] = useState("")
    const [bg, setBg] = useState("not valid")

    const [resCol, setResCol] = useState("")
    const [resId, setResId] = useState("")
    const [resShow, setResShow] = useState("")


    const [show, setShow] = useState(false);

    const handleClose = () => {
      setShow(false);
      history(`/adminimg/${resCol}/${resId}/${resShow}`)
    }
    const handleShow = () => setShow(true);
  

    function handleSubmit(e){
        e.preventDefault()
        if (pCategory === "" || pName === "" || pBrand === "" || pOrigin === "" || pDetails === ""){
            setErr("Please Fillout All Fields")
        }
        else if (pPrice === "0") {
            setErr("Amount Minimun 1 Rupees")
            setBg("price")
        }
        else if (adminPIN !== "5761") {
            setErr("Please Enter Correct Admin PIN")
            setBg("pin")
        }
        else {
        
            const data = {
                pcat:pCategory,
                pname:pName,
                pprice:pPrice,
                pbrand:pBrand,
                porg:pOrigin,
                pdet:pDetails,
                show:pShow,
              
            }
            
            server.post("addproduct",data).then((res)=>{
              console.log(res.data)

              setResCol(res.data.col)
              setResId(res.data.pid)
              setResShow(res.data.show) 
                
                if (res.data.st === "done") {
                  setPCategory("")
                  setPName("")
                  setPPrice(0)
                  setPBrand("")
                  setPOrigin("")
                  setPDetails("")
                  setAdminPIN("")
                  setPShow("")
                  handleShow()
                
                   

                } 
                
              }).catch((error)=>{
                console.log(error)
              })
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
          <Modal.Title>Product Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This Product Added Successfully...<br/>
          Click, Okay to continue add image of this product...
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>


        <div>
            <h2 className="topic">Add Product</h2>
        </div>
        <Form>
        <div style={{padding:"2rem"}}>
            <FloatingLabel controlId="floatingSelect" label="Product Category" className="mb-3">
                <Form.Select aria-label="Floating label select example" onChange={(e)=>{
                    setPCategory(e.target.value)
                    setErr("")
                }}>
                    <option>Select Product Category</option>
                    <option value="Computer">Computer</option>
                    <option value="Computer Accessories">Computer Accessories</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Mobile Accessories">Mobile Accessories</option>
                    <option value="Home Appliances">Home Appliances</option>
                    <option value="Toys">Toys</option>
                </Form.Select>

                </FloatingLabel>
                <FloatingLabel controlId="floatingSelect" label="Product Show" className="mb-3">
                <Form.Select aria-label="Floating label select example" onChange={(e)=>{
                    setPShow(e.target.value)
                    setErr("")
                }}>
                    <option>Select Product Show</option>
                    <option value="home">Home</option>
                    <option value="other">Other</option>
                </Form.Select>

                </FloatingLabel>

                      <FloatingLabel controlId="floatingInput" label="Product Name" className="mb-3">
                        <Form.Control type="text" placeholder="Product Name" onChange={(e)=>{
                            setPName(e.target.value)
                            setErr("")
                        }} value={pName} />
                      </FloatingLabel>

                      <FloatingLabel controlId="floatingInput" label="Price" className="mb-3">
                        <Form.Control type="number" placeholder="Price" onChange={(e)=>{
                            setPPrice(e.target.value)
                            setBg("")
                            setErr("")
                        }} value={pPrice} style={{borderColor: bg === 'price' ? 'red':'',borderWidth:"2px"}}/>
                      </FloatingLabel>

                      <FloatingLabel controlId="floatingInput" label="Brand" className="mb-3">
                        <Form.Control type="text" placeholder="Brand" onChange={(e)=>{
                            setPBrand(e.target.value)
                            setErr("")
                        }} value={pBrand}/>
                      </FloatingLabel>

                      <FloatingLabel controlId="floatingInput" label="Origin" className="mb-3">
                        <Form.Control type="text" placeholder="Origin" onChange={(e)=>{
                            setPOrigin(e.target.value)
                            setErr("")
                        }} value={pOrigin}/>
                      </FloatingLabel>

                      <FloatingLabel controlId="floatingTextarea" label="Details" className="mb-3">
                        <Form.Control type="text" as="textarea" placeholder="Details" onChange={(e)=>{
                            setPDetails(e.target.value)
                            setErr("")
                        }} value={pDetails} style={{padding:"60px"}}/>
                      </FloatingLabel>

                      <FloatingLabel controlId="floatingInput" label="Admin PIN" className="mb-3">
                        <Form.Control type="text" placeholder="Admin PIN" onChange={(e)=>{
                            setAdminPIN(e.target.value)
                            setBg("")
                            setErr("")
                        }} value={adminPIN} style={{borderColor: bg === 'pin' ? 'red':'',borderWidth:"2px"}}/>
                      </FloatingLabel>

                      <p style={{textAlign:"center", color:"#DC4C64"}}>{err}</p>

                    <div className="d-grid gap-2"><Button variant="primary" size="lg" onClick={handleSubmit}>
                        Add Product</Button>
                    </div>  
                                  
            </div>
            </Form>  
    </>
  )
}

export default Adminaddproduct
import React from 'react'
import Adminaddproduct from './admin/Adminaddproduct';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import '../css/font.css'






const Adminhome = () => {
  return (
    <>
    <br />
    <Container style={{margin:"5px"}}>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
            <Col sm={3} >
            <Nav variant="pills" className="flex-column">
                <Nav.Item>
                <Nav.Link eventKey="first">Add Product</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="second">Show Product</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="sixth">Delete Product</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="seventh">Edit Product</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="third">Show All Users</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="fourth">Show All Orders</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="fifth">Edit User</Nav.Link>
                </Nav.Item>
            </Nav>
            </Col>

            <Col sm={9} >
            <Tab.Content>
                <Tab.Pane eventKey="first"><Adminaddproduct /></Tab.Pane>
                <Tab.Pane eventKey="second">
                <div>
                    <h2 className="topic">
                      Show Product
                    </h2>
                    <h3 style={{textAlign:"center",marginTop:"20px"}}>This page service unavailable</h3>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="sixth">
                <div>
                    <h2 className="topic">
                      Delete Product
                    </h2>
                    <h3 style={{textAlign:"center",marginTop:"20px"}}>This page service unavailable</h3>
                </div>
                </Tab.Pane>
                <Tab.Pane eventKey="seventh">
                <div>
                    <h2 className="topic">
                      Edit Product
                    </h2>
                    <h3 style={{textAlign:"center",marginTop:"20px"}}>This page service unavailable</h3>
                </div>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                <div>
                    <h2 className="topic">
                      Show All Users
                    </h2>
                    <h3 style={{textAlign:"center",marginTop:"20px"}}>This page service unavailable</h3>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                <div>
                    <h2 className="topic">
                      Show All Orders
                    </h2>
                    <h3 style={{textAlign:"center",marginTop:"20px"}}>This page service unavailable</h3>
                </div>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                <div>
                    <h2 className="topic">
                      Edit User
                    </h2>
                    <h3 style={{textAlign:"center",marginTop:"20px"}}>This page service unavailable</h3>
                  </div>
                </Tab.Pane>
            </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>
    </Container>




    <br /><br />
    </>
  )
}

export default Adminhome
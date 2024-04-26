import React,{useState, useEffect} from 'react'
import Corouselslid from './Corouselslid'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import {useNavigate} from "react-router-dom";
import server from './../server.js'
import serverip from './serverip.js'








const Homepage = () => {
  console.log(server)
  const history = useNavigate()
  
  const [d, setD] = useState([])



  useEffect(() => {
    server.get('homepage')
      .then((response) => {
        // Handle the response data
        setD(response.data)
        
      })
      .catch((error) => {
        // Handle the error
        console.error("Error fetching data: ", error);
      });
  }, []);




 

  return (
    
    <>
  
      <Corouselslid />
      <br/>
      <Row xs={1} md={3} className="g-4">
      {d.map((p) => (
        <Col style={{height:"650px", minWidth:"410px"}}>
          <Card>
            <Card.Img variant="top" src={(p.img).replace('localhost', serverip)} style={{height:"400px", width:"401px", boxSizing:'content-box'}}/>
            <Card.Body>
              <Card.Title>{p.pname}</Card.Title>
              <Card.Text>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Price  : {p.pprice}</ListGroup.Item>
                  <ListGroup.Item>Brand  : {p.pbrand}</ListGroup.Item>
                              </ListGroup>

                <br />
                <div className="d-grid gap-2">
                  <Button variant="primary" size="lg" style={{backgroundColor:"#DC4C64", borderWidth:"0"}}
                   onClick={()=>{history(`/productview/${p.pid}/${p.pcat}`)}}>
                    View Product
                  </Button>

                </div>

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    <br />

    </>

  )
}

export default Homepage
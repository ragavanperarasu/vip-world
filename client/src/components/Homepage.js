import React,{useState, useEffect} from 'react'
import Corouselslid from './Corouselslid'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios'
import {useNavigate} from "react-router-dom";








const Homepage = () => {
  const history = useNavigate()
  
  const [d, setD] = useState([])

  const cli = axios.create({
    baseURL: "http://localhost:5000/" 
  });

  useEffect(() => {
    cli.get('homepage')
      .then((response) => {
        // Handle the response data
        setD(response.data)
        
      })
      .catch((error) => {
        // Handle the error
        console.error("Error fetching data: ", error);
      });
  }, []);

  function handleView(pid,pcat){
    history(`/productview/${pid}/${pcat}`)
  }



 

  return (
    
    <>
  
      <Corouselslid />
      <br/>
      <Row xs={1} md={3} className="g-4">
      {d.map((p) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={p.img} style={{height:"400px", width:"401px"}}/>
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
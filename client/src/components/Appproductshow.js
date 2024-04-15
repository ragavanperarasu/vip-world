import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Pagination from 'react-bootstrap/Pagination';
import serverip from './serverip.js'

import server from './../server.js'

const Appproductshow = () => {
    const params = useParams();

    const [d, setD] = useState([])
  
    const [active, setActive] = useState(1)
    const [tpageno, setTPageno] = useState(1)

    useEffect(() => {
        const data = {
            pcat:params.pcat,
            pageno:1
        }

        server.post('productcol',data).then((response) => {
            // Handle the response data

            setD(response.data.product)
            setTPageno(Math.ceil(response.data.colCount / 7))
            
            
          })
          .catch((error) => {
            // Handle the error
            console.error("Error fetching data: ", error);
          });
      

    }, []);


    function page(pageno){
      const data = {
        pcat:params.pcat,
        pageno:pageno
      }

      server.post('productcol',data).then((response) => {
        // Handle the response data
       
        setD(response.data.product)
        
      })
      .catch((error) => {
        // Handle the error
        console.error("Error fetching data: ", error);
      });
    }

    
    let items = [];
    for (let number = 1; number <= tpageno; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={()=>{
        page(number)
        setActive(number)
        
        }}>
        {number}
      </Pagination.Item>
    );
}




    return (
        
        
        <Container>
        {d.map((p) => (
            <Row style={{boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px',marginTop:"20px", padding:"10px", borderRadius:"10px"}}>

                <Col sm={4}>
                
                        <img variant="top" src={(p.img).replace('locahost', serverip)} alt='Product' style={{height:"300px", width:"301px", borderRadius:"10px"}}/>
                    
                </Col>
 
                <Col sm={8}>
                    <h3 style={{marginTop:"10px"}}>{p.pname}</h3>

                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Price  : {p.pprice}</ListGroup.Item>
                    <ListGroup.Item>Brand  : {p.pbrand}</ListGroup.Item>
                    <ListGroup.Item>Origin : {p.porg}</ListGroup.Item>
                    <ListGroup.Item>Category   : {p.pcat}</ListGroup.Item>
                    </ListGroup>
  
                  <br />

                  <div className="d-grid gap-2">
                    <Button variant="primary" size="lg" style={{backgroundColor:"#DC4C64", borderWidth:"0"}}
                     href={`/productview/${p.pid}/${p.pcat}`}>
                      View Product
                    </Button>
  
                  </div>
                </Col>
        </Row>

       

        ))}
     
      <br /> <br />
      <Container style={{textAlign:"center", display:"flex", justifyContent:'center'}}>
      <Pagination size="lg">{items}</Pagination>
      </Container>
            <br /><br />
      </Container>
     

    )}
export default Appproductshow
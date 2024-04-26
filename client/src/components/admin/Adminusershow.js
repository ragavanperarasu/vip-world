import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

const Adminusershow = () => {
  return (
    <div>
        <h2 className="topic">
                      Show All Users
        </h2>

    <ListGroup>
      <ListGroup.Item style={{backgroundColor:"#1A2238", color:"white", textAlign:"center",fontSize:"1.4rem"}}>
        User
      </ListGroup.Item>
      <ListGroup.Item >
        First Name :
      </ListGroup.Item>
      <ListGroup.Item>
        Last Name : 
      </ListGroup.Item>
      <ListGroup.Item>
        Phone Number : 
      </ListGroup.Item>
    </ListGroup>
    </div>
  )
}

export default Adminusershow
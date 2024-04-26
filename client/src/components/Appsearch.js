import React,{useState} from 'react'
import '../css/appsearchcss.css'
import {useNavigate} from "react-router-dom";

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

const Appsearch = () => {
  const history = useNavigate()

  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [goto, setGoto] = useState('')
  const [er, setEr] = useState('')

  const handleInputChange = (event) => {
    setEr('')
    const value = event.target.value;
    setSearchTerm(value);

    const dummySuggestions = [
      ['Apple Mobile', 'Mobile'],
      ['Vivo Mobile', 'Mobile'],
      ['OnePlus Mobile', 'Mobile'],
      ['Xiaomi Mobile', 'Mobile'],
      ['Nokia Mobile', 'Mobile'],
      ['POCO Mobile', 'Mobile'],
      ['Mobile', 'Mobile'],
      ['Samsung Mobile', 'Mobile'],
      ['iPhone', 'Mobile'],
      ['iPhone 15 Pro', 'Mobile'],
      ['iPhone 15 Pro Max', 'Mobile'],
      ['5G Mobile', 'Mobile'],
      ['4G Mobile', 'Mobile'],
      ['Samsung Galaxy S24 Ultra', 'Mobile'],


      ['Apple Laptop', 'Computer'],
      ['Computer', 'Computer'],
      ['Apple Macbook Air', 'Computer'],
      ['Dell Laptop', 'Computer'],
      ['Best Laptop', 'Computer'],
      ['HP Laptop', 'Computer'],
      ['ASUS Laptop', 'Computer'],
      ['Laptop', 'Computer'],


      ['Apple Charger','Mobile Accessories'],
      ['Mobile Charger','Mobile Accessories'],
      ['Noise Buds','Mobile Accessories'],
      ['Buds','Mobile Accessories'],
      ['Neck Band','Mobile Accessories'],


      ['Laptop Charger','Computer Accsoeries'],
      ['PC Monitor','Computer Accsoeries'],
      ['Monitor','Computer Accsoeries'],
      ['Dell Monitor','Computer Accsoeries'],
      ['PC Motherboard','Computer Accsoeries'],
      ['MSI Motherboard','Computer Accsoeries'],
      ['Keyboard','Computer Accsoeries'],
      ['Gaming Keyboard','Computer Accsoeries'],
      ['RGB Keyboard','Computer Accsoeries'],
      ['Wireless Keyboard','Computer Accsoeries'],
      ['Mouse','Computer Accsoeries'],
      ['Gaming Mouse','Computer Accsoeries'],
      ['Wireless Mouse','Computer Accsoeries'],
      ['Keyboard with Mouse','Computer Accsoeries'],
      ['Wireless Keyboard with Mouse','Computer Accsoeries'],


      ['Cookware', 'Home Appliances'],
      ['Pigeon Cookware', 'Home Appliances'],
      ['Nonstick Aluminium Cookware', 'Home Appliances'],
      ['Mixer Grinder 500 Watt', 'Home Appliances'],
      ['Grinder 500 Watt', 'Home Appliances'],
      ['Mixer 500 Watt', 'Home Appliances'],
      ['Boltmix Pro', 'Home Appliances'],
      ['Home Appliances', 'Home Appliances'],
      

      ['Toys', 'Toys'],
      ['Baby Toys', 'Toys'],
      ['LEGO Toys', 'Toys'],
      ['Drone', 'Toys'],
      ['DJI Drone', 'Toys'],
      ['OSMOS Drone', 'Toys'],

    ];
    
    const filteredSuggestions = dummySuggestions.filter(suggestion =>
      suggestion[0].toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filteredSuggestions);

    setShowSuggestions(value != '' ? true:false);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion[0]);
    setShowSuggestions(false);
    setGoto(suggestion[1])
  };

  function navpage(){
    if (goto === ""){
      setEr("Please Select Search Word")
    }
    else{
      history(`/productshow/${goto}`)
    }
    
  }

  return (
    <div className='search'>
    <Container >
      <br /><br />
      <InputGroup className="mb-3" size='lg'>
        <Form.Control aria-label="Text input with dropdown button" placeholder='Search Box' value={searchTerm} onChange={handleInputChange}/>
        <Button variant="outline-secondary" id="button-addon2" style={{backgroundColor:'#DC4C64', color:'white'}} onClick={navpage}>
          Search
        </Button>
        
      </InputGroup>
      <h4 style={{textAlign:"center", color:"whitesmoke"}}>{er}</h4>

      {showSuggestions && (
      <ListGroup as="ul" style={{height:"80vh"}}>
          {suggestions.map((suggestion, index) => (
              <ListGroup.Item as="li" key={index} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion[0]}</ListGroup.Item>
            ))}
     </ListGroup>
     )}


    </Container>
     {showSuggestions || (
      <div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></div>
     )}
     {showSuggestions && (
      <div></div>
     )}

    
    </div>
  )
  
}

export default Appsearch
import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import j1 from './j1.jpg';
import j2 from './j2.jpg';
import j3 from "./j3.jpg";

const Corouselslid = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>

            <Carousel.Item style={{height:"400px"}}>

            {/* <ExampleCarouselImage text="First slide" /> */}
            <img
                className="d-block w-100"
                src={j1}
                alt="Second slide"
                style={{objectFit:"cover"}}
            />
            <Carousel.Caption>
                <h3>Get More And Less Money</h3>
               
            </Carousel.Caption>

            
            </Carousel.Item>

            <Carousel.Item style={{height:"400px"}}>
            {/* <ExampleCarouselImage text="Second slide" /> */}
            <img
                className="d-block w-100"
                src={j3}
                alt="Second slide"
                style={{objectFit:"cover"}}
            />
            <Carousel.Caption>
                <h3>Choose Your Best</h3>
               
            </Carousel.Caption>
            </Carousel.Item>

{/*             <Carousel.Item style={{height:"400px"}}>
             <ExampleCarouselImage text="Third slide" /> 
            <img
                className="d-block w-100"
                src={j2}
                alt="Second slide"
                style={{objectFit:"cover"}}
            />
            <Carousel.Caption>
                <h3>Buy More And Less Time</h3>

            </Carousel.Caption>
            </Carousel.Item> */}

            </Carousel>
        </>
    )
}

export default Corouselslid
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
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{height:"400px"}}>
            {/* <ExampleCarouselImage text="Second slide" /> */}
            <img
                className="d-block w-100"
                src={j3}
                alt="Second slide"
            />
            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{height:"400px"}}>
            {/* <ExampleCarouselImage text="Third slide" /> */}
            <img
                className="d-block w-100"
                src={j2}
                alt="Second slide"
            />
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
            </Carousel.Caption>
            </Carousel.Item>

            </Carousel>
        </>
    )
}

export default Corouselslid
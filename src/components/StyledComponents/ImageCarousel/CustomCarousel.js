import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import "./CustomCarousel.css";


class CustomCarousel extends Component {
  render() {
    return (
      <div>
        <Carousel className='carouselDesign'>
          <Carousel.Item>
            <img
              height="240px"
              className="w-100 d-inline-block"
              src="./images/bearPic.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height="240px"
              className="w-100 d-inline-block"
              src="./images/mountain.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height="240px"
              className="w-100 d-inline-block"
              src="./images/pancakes.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}

export default CustomCarousel



import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Work() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    const deploymentLinks = ['https://broadcastrs.herokuapp.com/', 'https://danielolvera21.github.io/movie_date/index.html']
  
    return (
        <section className="main-section">
            <h1>Work</h1>
            <div className="carousel-container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/broadcastr.png"
            alt="broadcastr app"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/movie-date.png"
            alt="movie date"
          />
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
      <div className="deployment-container">
      <h4><a href={deploymentLinks[index]}>view deployment</a></h4>
      </div>
      </div>
      </section>
    );
  }

export default Work;
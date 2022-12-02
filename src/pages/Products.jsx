import React, { useEffect, useState } from 'react';
import Planets from '../components/Planets';
import '../css/carousel.css';
import {Link} from 'react-router-dom'

function Products() {
  const [slideIndex, setSlideIndex] = useState(1);

  const forwardSlide = () => {
    if (slideIndex >= Planets.length) {
      setSlideIndex(1)
    } else {
      setSlideIndex(slideIndex+1)
    }
  }

  const backwardSlide = () => {
    if (slideIndex <= 1) {
      setSlideIndex(Planets.length);
    } else {
      setSlideIndex(slideIndex-1)
    }
  }

  const currentSlide = (n) => {
    setSlideIndex(n);
  }

  // had issue with slideIndex since it's async so it's not reflective immediately
  // SO: https://stackoverflow.com/questions/54069253/the-usestate-set-method-is-not-reflecting-a-change-immediately

  useEffect(() => {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let j = 0; j < dots.length; j++) {
        dots[j].className = dots[j].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }, [slideIndex])


  return (
    <div style={
      {backgroundColor: 'black',
      minHeight:"100vh",
      paddingTop: "45px",
      display: "flex",
      
    }}>
      <div className="container carousel">
        <div className="slideshow-container">
          
          {Planets.map(planet => (
            <Link className="mySlides myFade" key={planet.index} to={`/products/${planet.name}/${planet.index}`}>
              <div className='d-flex justify-content-center' style={{overflow:'hidden', minWidth:"100px", minHeight:"100px", borderRadius:'20px', margin:'auto'}}>
                  <img className="carousel-img" src={planet.image} alt="planet" />
              </div>
            </Link>
          ))}

          <button className="prev" onClick={backwardSlide}>&#10094;</button>         
          <button className="next" onClick={forwardSlide}>&#10095;</button>
        </div>
    
        <div style={{textAlign: "center", marginTop: "32px"}}>

          {Planets.map(planet => (
            <span key={planet.index} className="dot" style={{marginLeft: '3px'}} onClick={() => currentSlide(planet.number+1)}></span>
          ))}
           
        </div>
      </div>
    </div>
  );
}

export default Products;
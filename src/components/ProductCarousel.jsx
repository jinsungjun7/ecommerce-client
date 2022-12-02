import React, { useEffect, useState } from 'react';
import space from '../images/core/space.jpg'
import uniqid from 'uniqid'

function ProductCarousel({planetGallery}) {
  const [productSlideIndex, setProductSlideIndex] = useState(1);

  const forwardSlide = () => {
    if (productSlideIndex >= planetGallery.length) {
      setProductSlideIndex(1)
    } else {
      setProductSlideIndex(productSlideIndex+1)
    }
  }

  const backwardSlide = () => {
    if (productSlideIndex <= 1) {
      setProductSlideIndex(planetGallery.length);
    } else {
      setProductSlideIndex(productSlideIndex-1)
    }
  } 

  useEffect(() => {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[productSlideIndex-1].style.display = "block";
  },[productSlideIndex])

  return (
        <div className="product-carousel">
            <div className="product-slideshow-container"
            style={
                {backgroundImage: `url(${space})`,
                backgroundRepeat: "no-repeat",
                backgroundSize:"cover",
                backgroundPosition:"0 25%",
                borderRadius:"20px"
            }}>

              {planetGallery.map(image => (
                <div className="mySlides myFade" key={uniqid()} >
                    {/* key={planet.index} */}
                  <div className='d-flex justify-content-center' style={{width:"100%"}}>
                      <img className="product-carousel-img" src={image}    alt="planet" />
                  </div>
                </div>
              ))}

              <button type="button" className="prev" onClick={backwardSlide}>&#10094;</   button>         
              <button type="button" className="next" onClick={forwardSlide}>&#10095;</    button>
            </div>
        </div>
    );
  }
  


export default React.memo(ProductCarousel)
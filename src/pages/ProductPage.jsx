import React from 'react';
import {useParams} from 'react-router-dom';
import Planets from '../components/Planets';
import '../css/product.css';
import space from '../images/core/space.jpg'
import ProductCarousel from '../components/ProductCarousel'
import ProductDescription from '../components/ProductDescription';
import PriceAndBuy from '../components/PriceAndBuy';


function ProductPage({openCart, addToCart}) {
  const {productIndex} = useParams();
  const planet = Planets[productIndex];

  return (
    <div className="product-page-container"
        style={
        {backgroundImage: `url(${space})`,
        position: 'absolute',
        scrollBehavior:'smooth',
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover",
        backgroundPosition:"0 25%",
        marginBottom:'5%'
    }}
    >
        <div className='container' style={{
            padding:"12px",
            position:'relative',
            paddingTop:'128px',
            display: "grid",
            gridTemplateColumns:"1fr 1fr",
        }}>
            
            <ProductDescription planet={planet}/>
            <div style={{
              display:'grid',
              gridTemplateRows:'1fr 1fr',
            }}>
              <ProductCarousel 
                planetGallery={planet.gallery}
              />

              <PriceAndBuy 
                planet={planet} 
                openCart={openCart}
                addToCart={addToCart}
                // this is causing productcarousel to retrigger
              />
            </div>

            
            
        </div>
    </div>
  )
}

export default ProductPage
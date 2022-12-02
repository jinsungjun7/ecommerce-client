import React from 'react'
import { Button } from 'react-bootstrap'

function PriceAndBuy({planet, openCart, addToCart}) { 
  const buyNow = (index) => {
    addToCart(index);
    openCart();    
  }

  return (
    <div>
        <h2 style={{color:'white', textAlign:'center', padding:'32px'}}>${planet.price} mln per ticket</h2>
        <div style={{
            display:'flex',
            justifyContent:"center",
            gap:'64px',
            alignItems:'center',
            height:'30%',
        }}>
            {/* needs to setState of cart to add a new planet */}
            <Button type="button" variant='light outline-dark' size='lg' style={{fontWeight:'bold'}} onClick={() => addToCart(planet.index)}>Add to cart</Button>

            {/* setstate and then open cart -> likely async */}
            <Button type="button" variant='light outline-dark' size='lg' style={{fontWeight:'bold'}} onClick={() => buyNow(planet.index)}>Buy now</Button>
        </div>
        
    </div>
  )
}

export default PriceAndBuy
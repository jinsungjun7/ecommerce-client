import React from 'react'
import '../css/cart.css'
import { UilShoppingCart } from '@iconscout/react-unicons'
import { UilTimesSquare } from '@iconscout/react-unicons'
import { Button } from 'react-bootstrap'

function Cart({cart, addToCart, removeFromCart, totalItems, totalPrice, closeCart}) {
  return (
    <div className="cart-container" id='cart-container'>
      <div className="cart-body">
        <h2 className="cart-title">Your Cart <UilTimesSquare type='button' onClick={closeCart} id='close-cart' size="2.5rem"/></h2>
        <div className="totalPrice">
          SUBTOTAL: ${totalPrice} {totalPrice === 0 ? "" : "mln."}
        </div>
        
        
        {totalItems === 0 ? 
          <div className="empty-cart-content">
            <UilShoppingCart size="10rem" />
            <h3>Your cart is empty!</h3>
          </div>
          :
          <div className="cart-content">
            
            {cart.map(item => (
              <div className='cart-item' key={item.name}>
                <img src={item.image} alt="planet" id='cart-image'/>
                <div>
                  <button onClick={() => removeFromCart(item.index)} className='cartBtn'>-</button>                  
                  <div className='quantity'>{item.quantity}</div>
                  <button onClick={() => addToCart(item.index)} className='cartBtn'>+</button>
                </div>
              </div>
            ))}
          </div>
        }

        <Button id='pay' variant='success' size='lg'>Submit and Pay</Button>
      </div>   
    </div>

  )
}

export default Cart
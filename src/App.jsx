import React, { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import Products from './pages/Products';
import MenuBar from './components/MenuBar';
import ProductPage from './pages/ProductPage';
import Learn from './pages/Learn';
import Login from './pages/Login';
import Register from './pages/Register'

import earth from './images/cartImage/earth.jpg';
import moon from './images/cartImage/moon.jpg';
import neptune from './images/cartImage/neptune.jpg';
import jupiter from './images/cartImage/jupiter.jpg';
import saturn from './images/cartImage/saturn.jpg';
import uranus from './images/cartImage/uranus.jpg';
import mars from './images/cartImage/mars.jpg';
import venus from './images/cartImage/venus.jpg';


function App() {
  const [cart, setCart] = useState([
    {
      name: "venus",
      index: 0,
      quantity: 0,
      price: 10,
      image:venus
    },
    {
      name: "earth",
      index: 1,
      quantity: 0,
      price: 20,
      image:earth
    },
    {
      name: "moon",
      index: 2,
      quantity: 0,
      price: 30,
      image:moon
    },
    {
      name: "mars",
      index: 3,
      quantity: 0,
      price: 40,
      image:mars
    },
    {
      name: "jupiter",
      index: 4,
      quantity: 0,
      price: 50,
      image:jupiter
    },
    {
      name: "saturn",
      index: 5,
      quantity: 0,
      price: 60,
      image:saturn
    },
    {
      name: "uranus",
      index: 6,
      quantity: 0,
      price: 70,
      image:uranus
    },
    {
      name: "neptune",
      index: 7,
      quantity: 0,
      price: 80,
      image:neptune
    },
  ]);

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const [user, setUser] = useState('');
  
  useEffect(() => {
    setTotalPrice(cart.filter(item => item.quantity>0).reduce(function (prev, curr) {return prev + curr.price*curr.quantity}, 0));
    setTotalItems(cart.filter(item => item.quantity>0).reduce(function (prev, curr) {return prev + curr.quantity}, 0));
  }, []);

  const openCart = () => {
    const cartDiv = document.getElementById('cart-container');
    cartDiv.classList.add('show');
  }

  const closeCart = () => {
    const cartDiv = document.getElementById('cart-container');
    cartDiv.classList.remove('show');
  }

  const addToCart = (index) => {
    let temp = cart;
    temp[index].quantity++;
    setCart(temp);
    setTotalItems(totalItems+1);
    setTotalPrice(totalPrice+cart[index].price);
  }

  const removeFromCart = (index) => {
    let temp = cart;
    temp[index].quantity--;
    setCart(temp);
    setTotalItems(totalItems-1);
    setTotalPrice(totalPrice-cart[index].price);
  }

  return (
    <div>
      <MenuBar 
        openCart={openCart}
        totalItems={totalItems}
        user={user}
        setUser={setUser}
      />
      
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/products/:productName/:productIndex'  element={
          <ProductPage 
            addToCart={addToCart}
            openCart={openCart}
          />} 
        />
        <Route path='/products' exact element={<Products />} />
        <Route path='/payment' exact element={<Payment cart={cart} />}/>
        <Route path='/learn' exact element={<Learn />} />
        <Route path='/login' exact element={
          <Login 
            setUser={setUser}
          />}>
        </Route>
        <Route path='/register' exact element={
          <Register />}>
        </Route>
        
      </Routes>

      <Cart style={{display:'none'}}
          cart={cart.filter(item => item.quantity>0)}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          totalItems={totalItems}
          totalPrice={totalPrice}
          closeCart={closeCart}
        />
    </div>
  );
}

export default App;

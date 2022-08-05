import React, { useState } from 'react';
import './App.css';
import Shop from './components/Shop';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [orders, setOrders] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item])
  }

  return (
    <div className="App">
      {!showCart ? (
        <Shop add={addItem} setShowCart={setShowCart} isEmpty={cart.length === 0} />
      ) : (
        <Cart cart={cart} setCart={setCart} setShowCart={setShowCart} orders={orders} setOrders={setOrders} />
      )}
      <div className='message'>Item added to the cart</div>
    </div>
  );
}

export default App;

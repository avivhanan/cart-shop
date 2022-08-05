import React, { useState } from 'react';
import './App.css';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Message from './components/Message';

function App() {
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [orders, setOrders] = useState([]);
  const [messages, setMessages] = useState([])

  const addItem = (item) => {
    setCart([...cart, item])
    setMessages([...messages, 'Item added to the cart'])
  }

  const onClearMessage = (id) => {
    let temp = [...messages]
    temp.splice(id, 1)
    setMessages([...temp])
  }

  const onBuyMessage = () => {
    setMessages([...messages, 'Order created sucssfuly'])
  }

  return (
    <div className="App">
      {!showCart ? (
        <Shop add={addItem} setShowCart={setShowCart} isEmpty={cart.length === 0} />
      ) : (
        <Cart cart={cart} setCart={setCart} setShowCart={setShowCart} orders={orders} setOrders={setOrders} onBuyMessage={onBuyMessage} />
      )}
      {messages.map((message, i) => {
        return <Message key={i} id={i} message={message} onClearMessage={onClearMessage} />
      })}
    </div>
  );
}

export default App;

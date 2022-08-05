import React, { useState } from 'react'
import CartItem from './CartItem'
import cartIcon from './icons/cart-shopping-solid.svg'
import './cart.css'

export default function Cart(props) {
    const countTotal = () => {
        let total = 0;
        props.cart.forEach((val) => {
            total += val.price
        })
        return total
    }

    const onBuy = () => {
        props.setOrders([...props.orders, props.cart]);
        props.setShowCart(false)
        props.setCart([])
    }

    return (
        <div className='cart-main'>
            <div className='cart-header'>
                <div className='cart-txt'>Cart</div>
                <img className='icon' alt="cart" src={cartIcon} />
            </div>
            <div className='cart'>
                <div className='cart-list'>
                    {props.cart.map((val, i) => {
                        return <CartItem key={i} name={val.name} price={val.price} />
                    })}
                </div>
                <div className='total'>Total: {countTotal()}$</div>
                <div className='btn-wraper'>
                    <button onClick={onBuy} className='btn'>Buy</button>
                </div>
            </div>
        </div>
    )
}

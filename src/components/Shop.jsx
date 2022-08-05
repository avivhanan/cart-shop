import React from 'react'
import ShopItem from './ShopItem'
import cartIcon from './icons/cart-shopping-solid.svg'
import homeIcon from './icons/house-solid.svg'
import './shop.css'

export default function Shop(props) {
    const products = [
        { name: 'Computer', price: 100 },
        { name: 'Paper', price: 1 },
        { name: 'Pen', price: 10 },
    ]

    const onCartClick = () => {
        props.setShowCart(true)
    }

    return (
        <div className='shop-main'>
            <div className='header'>
                <img className='home-icon' alt='home' src={homeIcon}></img>
                <div className='header-txt'>SV-Shop</div>
                <img className={`cart-icon ${props.isEmpty ? 'empty' : ''}`} alt="cart" src={cartIcon} onClick={onCartClick} />
            </div>
            <div className='shop'>
                <div className='list'>List of products</div>
                {products.map((val, i) => {
                    return <ShopItem key={i} item={val} add={() => props.add(val)} />
                })}
            </div>
        </div>
    )
}


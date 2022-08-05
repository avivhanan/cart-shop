import React from 'react'
import './shop-item.css'

export default function Item({ item: { name, price }, add }) {
    return (

        <div className='shop-item'>
            <div>{name}</div>
            <div>Price:{price}$</div>
            <button className='item-btn' onClick={add}>+</button>
        </div>
    )
}

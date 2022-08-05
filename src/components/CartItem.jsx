import React from "react"
import './cart-item.css'
export default function CartItem(props) {

    return (
        <div className="cart-item">
            <div>{props.name}</div>
            <div>{props.price}$</div>
        </div>
    )
}

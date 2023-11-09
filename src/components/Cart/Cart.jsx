// Cart.js
import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const { cart, handleClearCart, children } = props;
    // console.log(cart);

    let total = 0;
    let shippingCost = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shippingCost = shippingCost + product.shipping * product.quantity;
    }

    // const tax = (total * 10) / 100;
    const tax = (total * 0.1).toFixed(2);
    // const taxNum = +tax;


    const grandTotal = total + shippingCost + parseFloat(tax);

    return (
        <div className='cart'>
            <h3>Order summary</h3>
            <div className='cart-div'>
                <p><small>Selected Items: {quantity}</small></p>
                <p><small>Total Price: ${total}</small></p>
                <p><small>Total Shipping Charge: ${shippingCost}</small></p>
                <p><small>Tax: ${tax}</small></p>
                <h4>Grand Total: {grandTotal.toFixed(2)}</h4>
                <button onClick={handleClearCart} className='clear-cart'>
                    Clear Cart
                    <FontAwesomeIcon icon={faTrash} />
                </button>
                {
                    children
                }
            </div>

        </div>
    );
};

export default Cart;

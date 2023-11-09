import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css';

const ReviewItem = ({ product, handleRemoveFromCart }) => {
    const { id, name, img, quantity, price } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-name'>{name}</p>
                <p>Price: <span className='orange-text'>${price}</span></p>
                <p>Quantity: <span className='orange-text'>{quantity}</span></p>
            </div>
            <button onClick={() => handleRemoveFromCart(id)} className='btn-dlt'>
                <FontAwesomeIcon className='dlt-icon' icon={faTrash} />
            </button>
        </div>
    );
};

export default ReviewItem;
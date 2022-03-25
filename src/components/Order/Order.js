import React from 'react';
import './Order.css'
const Order = ({order}) => {
    const {name, img} = order;
    return (
        <div className='main-order-container'>
            <div className="order-container">
                <img className='order-img' src={img} alt="" />
                <h4>{name}</h4>
            </div>
            
            
        </div>
    );
};

export default Order;
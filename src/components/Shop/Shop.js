import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Order from '../Order/Order';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState ([]);
    const [orders, setOrders] = useState ([]);

    // console.log (products);
    useEffect ( () => {
        fetch ('data.json')
        .then (res => res.json ()) 
        .then (data => setProducts (data))
    }, []);

    const handleAddToCart = (product) => {
        let newOrders = [...orders, product];
        setOrders (newOrders);

    }  

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map (product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }

            </div>
            <div className="order-details-container">
                <h2>Selected Items</h2>
                {
                    orders.map (order => <Order
                    key={order.id}
                    order={order}
                    ></Order>)
                }
                <button className='choose-btn'>
                    <p>CHOOSE 1 FOR ME</p>
                </button>
                <button className='choose-again-btn'>
                    <p>CHOOSE AGAIN</p>
                </button>
              
            </div>
            
            
        </div>
    );
};

export default Shop;
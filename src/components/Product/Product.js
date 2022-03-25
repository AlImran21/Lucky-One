import React from 'react';
import './Product.css'
import {BsFillCartPlusFill} from 'react-icons/bs';
const Product = ({product}) => {
    const {name, img, price} = product;
    console.log (name);
    return (
        <div className='product'>
            <img src={img} alt="" />
                <div className="product-info">
                    <p className='product-name'>{name}</p>
                    <p className='product-price'>Price: ${price}</p>
                </div>
                <button className='btn-cart'>
                    <p className='btn-text'>Add to cart</p>
                    <BsFillCartPlusFill className='icon' />
                </button>
            
            
        </div>
    );
};

export default Product;
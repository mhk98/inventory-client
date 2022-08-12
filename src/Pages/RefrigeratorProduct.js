import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Refrigerator from './Refrigerator';

const RefrigeratorProduct = () => {

    const [products, setProducts] = useState([])

    useEffect( () => {
    fetch('https://frozen-cove-13673.herokuapp.com/refrigerator')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div>
            {
                products.map(product => <Refrigerator key={product._id} product={product}></Refrigerator>)
            }
        </div>
    );
};

export default RefrigeratorProduct;
import React, { useEffect, useState } from 'react';
import Television from './Television';

const TelevisionProduct = () => {

    const [products, setProducts] = useState([])

    useEffect( () =>{

        fetch('https://frozen-cove-13673.herokuapp.com/television')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div>
            {
                products.map(product => <Television key={product._id} product={product}></Television>)
            }
        </div>
    );
};

export default TelevisionProduct;
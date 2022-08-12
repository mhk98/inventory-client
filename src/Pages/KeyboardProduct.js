import React, { useEffect, useState } from 'react';
import Keyboard from './Keyboard';

const KeyboardProduct = () => {

    const [products, setProducts] = useState([])

    useEffect( () =>{

        fetch('https://frozen-cove-13673.herokuapp.com/keyboard')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div>
            {
                products.map(product => <Keyboard product={product}></Keyboard>)
            }
        </div>
    );
};

export default KeyboardProduct;
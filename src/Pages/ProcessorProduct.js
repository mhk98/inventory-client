import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Processor from './Processor';

const ProcessorProduct = () => {
    const [products, setProducts] = useState([])

    useEffect( () =>{

        fetch('https://frozen-cove-13673.herokuapp.com/processor')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div>
            {
                products.map(product => <Processor key={product._id} product={product}></Processor>)
            }

            
        </div>
    );
};

export default ProcessorProduct;
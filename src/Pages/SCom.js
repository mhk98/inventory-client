import React, { useEffect, useState } from 'react';

import Home from './Home';


const SCom = () => {
    const [categories, setCategories] = useState([])
// console.log(categories)
    useEffect( () =>{

        fetch('https://frozen-cove-13673.herokuapp.com/inventory')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

   

    return (
        <div>

        
            {
                categories.map(category => <Home key={category._id} category={category}></Home>)

            }

            console.log(category)

        </div>
    );
};

export default SCom;
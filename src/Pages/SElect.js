import React, { useEffect, useState } from 'react';
import Home from './Home';

const Select = () => {
    const [subElects, setSubElects] = useState([])

    useEffect( () =>{

        fetch('https://frozen-cove-13673.herokuapp.com/subcat')
        .then(res => res.json())
        .then(data => setSubElects(data))
    }, [])
    return (
        <div>
            {
                subElects.map(subelect => <Home key={subelect._id} subcom={subelect}></Home>)

            }
        </div>
    );
};

export default Select;
import React from 'react';
import { Link} from 'react-router-dom';

const Navbar = () => {
    return (
        
            <div className='navbar bg-base-100'><Link to='/' className='text-2xl content-left font-bold mb-8 '>Inventory Management</Link></div>
        
    );
};

export default Navbar;
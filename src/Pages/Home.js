import React from 'react';
import { faSchool, faPlus, faDashboard, faBookReader, faPeopleLine, faPenToSquare, faBook, faChalkboard, faCameraRetro, faBell, faComputer, faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Home.css';
import { Link} from 'react-router-dom';
const Home = (props) => {

    // console.log(props.category)

//   const {name}= props.category;

    return (
     
<div>

<div className='text-left flex flex-col ml-4'> 
<div>
<span className='flex items-center'><FontAwesomeIcon icon={faDashboard}></FontAwesomeIcon><h2 className='text-xl font-bold ml-4'>Dashboard</h2></span>
<div class="dropdown">
<FontAwesomeIcon className='font-bold' icon={faComputer}></FontAwesomeIcon><button class="dropbtn font-bold">Computer</button>
  
  <div class="dropdown-content">
  
  <Link to='/processor'>Processor</Link>
  <Link to='/keyboard'>Keyboard</Link>
  
  </div>
</div>
<span className='ml-4'><Link to='/subcom'><FontAwesomeIcon className='cursor-pointer' icon={faPlus}></FontAwesomeIcon></Link></span>
</div>
<div>
    
<div class="dropdown">
<FontAwesomeIcon className='font-bold' icon={faMicrochip}></FontAwesomeIcon><button class="dropbtn font-bold">Electronics</button>
  
  <div class="dropdown-content">

  <Link to='/television'>Television</Link>
  <Link to='/refrigerator'>Refrigerator</Link>
  
  </div>
</div>
<span className='ml-4'><Link to='/subelect'><FontAwesomeIcon className='cursor-pointer' icon={faPlus}></FontAwesomeIcon></Link></span>
</div>


</div>
</div>
    );
};

export default Home;
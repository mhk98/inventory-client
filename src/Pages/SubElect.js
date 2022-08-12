import React from 'react';
import { toast } from 'react-toastify';


const SubElect = () => {

    const handleSubmit = event =>{
        event.preventDefault()
    
        const category = {
          name: event.target.name.value,
    
        }
    
        const url = 'https://frozen-cove-13673.herokuapp.com/subcat'
        fetch(url, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(category)
        })
    
        .then(res => res.json())
        .then(data =>{
          if(data){
            toast('Successfully Added Subcategory')
          }
        })
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>
        
          <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" name='name' /><br/>
        
          <input type="submit" value="Submit" className='btn mt-4'/>
        
          </form>
                </div>
    );
};

export default SubElect;
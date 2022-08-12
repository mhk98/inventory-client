import React from 'react';
import { toast } from 'react-toastify';

const Television = ({product}) => {

    // const {name, image, price} = product;
    const handleSubmit = event =>{
        event.preventDefault()
    
        const product = {
          name: event.target.name.value,
          image:event.target.image.value,
          price:event.target.price.value,
    
        }
    
        const url = 'https://frozen-cove-13673.herokuapp.com/television'
        fetch(url, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(product)
        })
    
        .then(res => res.json())
        .then(data =>{
          if(data){
            toast('Successfully Added Product')
          }
        })
    }
    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Brand Name" name='name' class="input w-full max-w-xs mt-2 ml-4 border-black" />
                <input type="text" placeholder="Image Url" name='image' class="input w-full max-w-xs mt-2 ml-4 border-black" />
                <input type="text" placeholder="Price" name='price' class="input w-full max-w-xs mt-2 ml-4 border-black" /> 
                <input type="submit" value="Add Product" className='btn mt-2 ml-4'/>
            </form>
            
            <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Update</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Television;
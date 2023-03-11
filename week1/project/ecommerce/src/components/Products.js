import React from 'react'
import products from "../fake-data/all-products";
export default function Products(props) {

 let prodList = products;    
    if (props.activeCategory!=='all') {
        prodList=products.filter((item) =>{
        return item.category===props.activeCategory;
        })
    }
    const getDiscription = (name)=>{
      if (name.includes('FAKE:')) {
         return  name.slice(6);
      } else {
        return name;
      }

    }
     
  return (
    <>
    {
       prodList.map((obj, index)=>{
        const discriptionName=getDiscription(items);
        return (
        <li  key={index} className='products--item'>
        <div className='product'>
            <img className='product--image' src={obj.image} alt={obj.title}/>
            <span className='product--title'>{discriptionName}</span>
        </div>
    </li>
        )
       }) 
    }
    </>
  )
   
    
        
}

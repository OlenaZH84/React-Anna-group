import React from 'react'
import products from "../fake-data/all-products";
export default function Products(props) {

 let prodList = products;    
    if (props.activeCategory!=='all') {
        prodList=products.filter((item) =>{
        return item.category===props.activeCategory;
        })
    }
     
 return (
    <>
    {
       prodList.map((obj, index)=>{
        return (
        <li  key={index} className='products--item'>
        <div className='product'>
            <img className='product--image' src={obj.image}/>
            <span className='product--title'>{obj.title}</span>
        </div>
    </li>
        )
       }) 
    }
    </>
  )
   
    
        
}

import React from 'react'
import categories from "../fake-data/all-categories";
 
export default function Categories({onClickCategory, activeCategory}) {

 const setCategoryName = (name) => name.slice(6);
  function setSelected(items, activeCategory){
      console.log(items);
       if (activeCategory === 'all' || items!==activeCategory){
               return 'categories--item';
      } else { 
              return 'categories--item categories--item-selected'; 
      }
  } 
  
 return (
    <div className='categories'>
      
      {categories.map((items, index)=> {
      const categoryName=setCategoryName(items);
      const selectedNotSelected=setSelected(categoryName, activeCategory);
       return  <div className={selectedNotSelected}   key={`${categoryName}_${index}`} onClick ={()=>onClickCategory(categoryName)} >{items}</div>
       
    })}
    </div>
    
 )
}
 
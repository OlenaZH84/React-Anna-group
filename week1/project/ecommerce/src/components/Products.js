import React, { useState, useEffect } from 'react';
import products from '../fake-data/all-products';
import ProductsList from './ProductsList';

export default function Products(props) {
  let prodList = products;
  if (props.activeCategory !== 'all') {
    prodList = products.filter((item) => {
      return item.category === props.activeCategory;
    });
  }
  // console.log(props.activeCategory);
  const getDiscription = (title) => {
    if (title.includes('FAKE:')) {
      return title.slice(6);
    } else {
      return title;
    }
  };
  // const [data, setData] = useState([]);
  // const [filter, setFilter] = useState(data);
  // const [loading, setLoading] = useState(false);
  // let componentMounted = true;

  // useEffect(() => {
  //   const getProducts = async () => {
  //     setLoading = true;
  //     const response = await fetch('https://fakestoreapi.com/products');
  //   };
  //   getProducts();
  // }, []);
  // const Loading = () => {
  //   return <>Loading...</>;
  // };
  // const ShowProducts = () => {
  //   return (

  //   )
  // };
  return (
    <>
      {prodList.map((obj, index, title) => {
        const discriptionName = getDiscription(obj.title);
        // console.log(discriptionName);
        return (
          <ProductsList
            name={discriptionName}
            src={obj.image}
            alt={obj.title}
            key={index}
            forlink={obj.id}
          />
          // <li key={index} className="products--item">
          //   <Link to={`/product/${obj.id}`}>
          //     <div className="product">
          //       <img className="product--image" src={obj.image} alt={obj.title} />
          //       <span className="product--title">{discriptionName}</span>
          //     </div>
          //   </Link>
          // </li>
        );
      })}
    </>
  );
}

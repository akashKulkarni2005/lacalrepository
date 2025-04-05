import React from 'react';
import Product from './Product';

export default function ProductList(props) {
  return (
    
      props.productList.map((product, index) => (
        <Product
          key={index}
          product={product}
          increment={props.increment}
          decrement={props.decrement}
          remove={props.remove} 
          Add={props.Add} 
          totalItems={props.totalItems}
          index={index}
        />
      ))

     
      
  );
}




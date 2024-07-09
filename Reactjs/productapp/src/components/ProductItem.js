import React from 'react';

import ProductDate from './ProductDate';
import Card from './Card';
import './ProductItem.css';

const ProductItem = (props) => {

  const title = props.title;
  function clickHandler(){
    console.log("Button clicked")
  }

  return (
    <Card className='product-item'>
      <ProductDate date={props.date} />
      <div className='product-item__description'>
        <h2>{props.title}</h2>
      </div>
      <button onClick={clickHandler}> Add to Cart</button>
    </Card>
  );
}

export default ProductItem;

// 11:01
// react basics 2
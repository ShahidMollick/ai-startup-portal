import React from 'react';
import Button from '../../components/button';
import Card from '../../components/card';

const Product = () => {
  return (
    <div>
      <h1>Product Page</h1>
      <Card 
        variant="primary" 
        width="80%" 
        header={<h2>Card Header</h2>} 
        body={<p>This is the card body content.</p>} 
        footer={<button>Card Footer Button</button>} 
      />
      <Button variant = "primary">e commerece</Button>
      <h2>Green Grocery Delivery</h2>

    </div>
  );
};

export default Product;

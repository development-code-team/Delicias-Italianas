import React from 'react';
import "../Styles/Products.css";

// PRODUCT AND CART connection add the onClick function to add products to the cart

// This component will display the components on the screen 
// Use a map to loop through the productItems array
const Products = ({productItems, handleAddProduct}) => {
  return (

    <div className='products'>
      {productItems.map((productItem)=> (
        <div className='card1'>
          <div>
            <img
              className='product-image'
              src= {productItem.image}
              alt= {productItem.name}
            />
          </div>

          <div>
            <h5 className='product-name'> {productItem.name}</h5>
          </div>

          <div className='product-price'>${productItem.price}</div>
        
          <div>
            <button 
              className="product-add-button"
              onClick={() => handleAddProduct(productItem)}
            >
              Añadir al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );  
};

export default Products;
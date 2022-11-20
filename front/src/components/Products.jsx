import React, { useEffect, useState } from 'react';
import "../Styles/Products.css";
import axios from 'axios';

// PRODUCT AND CART connection add the onClick function to add products to the cart

// This component will display the components on the screen 
// Use a map to loop through the productItems array
const Products = ({handleAddProduct}) => {


  const[dataproductos, setdataproductos] = useState([])


    useEffect(() => {
        axios.get('/api/getall').then(res =>{
            // Solo el data, sino retorna más elemento como el tipo de response, esta data se le envía al hook useState
            console.log(res.data)
            setdataproductos(res.data)
        }).catch(err =>{
            console.log(err)
        })
    }, [])


  return (

    <div className='products'>
      {dataproductos.map((productItem)=> (
        <div className='card1'>
          <div>
            <img
              className='product-image'
              src= {productItem.imagen}
              alt= {productItem.name}
            />
          </div>

          <div>
            <h5 className='product-name'> {productItem.nombre}</h5>
          </div>

          <div className='product-price'>${productItem.precio}</div>

          
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
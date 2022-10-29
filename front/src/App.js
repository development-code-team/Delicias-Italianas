import './Styles/App.css';

import React, { useState } from 'react';
import data from "./components/json/Data";
import Header from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ProductsAdm } from './components/ProductsAdm';
import { Home } from './components/Home';
import { Ventas } from './components/Ventas';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Root from './components/routes/Root';

function App() {

  const {productItems} = data;
  const [cartItems, setCartItems] = useState([]);

  
  const handleAddProduct = (product) =>{
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist){
      setCartItems(cartItems.map((item) => item.id === product.id ? 
      {...ProductExist, quantity: ProductExist.quantity + 1} : item)
      );
      } else {
      setCartItems([...cartItems, {...product, quantity: 1}]);
    }
  };


  const handleCartClearance = () => {
    setCartItems([]);
  };

  const handleRemoveProduct = (product) =>{
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist.quantity === 1){
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) => item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity - 1}: item)
      )
    }
  }



  return (
    <Router>
    <div className="App">
        <Header />
        <br />
        <div className='container container-fluid'>
          <Routes>
            <Route path={"/listaventas"} element={<Ventas />} />
            <Route path={"/ProductsAdmin"} element={<ProductsAdm />} />
            <Route path={"/Home"} element={<Home />} />
          </Routes>
        </div>
        
        
        
    </div>

    <Root 
          productItems={productItems} 
          cartItems={cartItems} 
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct} 
          handleCartClearance={handleCartClearance} 
        />
    
    <Footer />
    </Router>
    
  );
}

export default App;

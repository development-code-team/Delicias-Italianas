import './Styles/App.css';

import React, { useState } from 'react';
import data from "./components/json/Data";
import Header from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ProductsAdm } from './components/ProductsAdm';
import { Home } from './components/Home';
import { Ventas } from './components/Ventas';
import ProductosAdd from './components/ProductosAdd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Root from './components/routes/Root';

import { Login } from './components/user/Login'
import { Register } from './components/user/Register';

import AgregarProductos from './components/addproductos/AgregarProductos';
import ListaProductos from './components/addproductos/ListaProductos';
import EditarProducto from './components/addproductos/EditarProductos';



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
        <Header cartItems={cartItems}/>
        <br />
        <div className='container container-fluid'>
          <Routes>
            <Route path={"/listaventas"} element={<Ventas />} />
            <Route path={"/ProductsAdmin"} element={<ProductsAdm />} />
            <Route path={"/Home"} element={<Home />} />
            <Route path={"/ProductosAdd"} element={<ProductosAdd />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/register"} element={<Register />} />
            <Route path={"/agregarproducto"} element={<AgregarProductos/>}></Route>
            <Route path={"/listaproductos"} element={<ListaProductos/>}></Route>
            <Route path={"/editarproducto/:idproducto"} element={<EditarProducto/>} exact></Route>

     
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

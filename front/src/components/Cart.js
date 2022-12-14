import React from 'react'
import "../Styles/Cart.css"
// Step 1: Import the cart in the root

// Step 2 : Use the handleAddProduct function to add items 
// Step 3 : Use the handleRemoveProduct function to remove items, it is in the app.js 



const Cart = ({
    cartItems, 
    handleAddProduct, 
    handleRemoveProduct,
    handleCartClearance
    }) => {
    // Calculate the total price
  const totalPrice = cartItems.reduce((precio, item) => precio + item.quantity * item.precio, 0);
  return (
    <div className="cart-items">
        <h2 className='cart-items-header'> Productos en el carrito</h2>
        <div className='clear-cart'>
            {cartItems.length >= 1 && (
                <button className='clear-cart-button' onClick={handleCartClearance}>
                    Vaciar
                </button>
            )}
        </div>


        {cartItems.length === 0 && (
            <div className="cart-items-empty"> No hay productos en el carrito </div>
            )}
        
        <div>
            {cartItems.map((item) => (
                <div key={item._id} className="cart-items-list">
                    <img 
                        className="cart-items-image" 
                        src={item.imagen} 
                        alt={item.name}   
                    />
                    <div className='cart-items-name'>{item.nombre}</div>
                    <div className='cart-items-function'>
                        <button 
                            className='cart-items-add' 
                            onClick={() => handleAddProduct(item)}
                        >+
                        </button>
                        <button 
                            className='cart-items-remove'
                            onClick={() => handleRemoveProduct(item)}
                        >-
                        </button>
                    </div>
                    <div className='cart-items-price'>
                        {item.quantity} * ${item.precio}
                    </div>
                </div>
            ))}
        </div>

        <div className='cart-items-total-price-name'>
            Precio total
            <div className='cart-items-total-price'> 
                ${totalPrice}
            </div>

        </div>

    </div>
  )
}
// En carrito crear una petici??n post de ventas en el que se tomen los datos del producto, en este caso Item y se env??en al chart de ventas
export default Cart
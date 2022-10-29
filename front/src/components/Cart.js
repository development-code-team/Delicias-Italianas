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
  const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);
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
                <div key={item.id} className="cart-items-list">
                    <img 
                        className="cart-items-image" 
                        src={item.image} 
                        alt={item.name}   
                    />
                    <div className='cart-items-name'>{item.name}</div>
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
                        {item.quantity} * ${item.price}
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

export default Cart
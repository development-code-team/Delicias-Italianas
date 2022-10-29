import React, { Fragment } from 'react'
import "../Styles/App.css";
import Data from './json/Data'


export const ProductsAdm = () => {
  
  return (
    <Fragment>
        <h1 id='encabezado_productos' className='text-center'>Últimas comidas registradas</h1>

        <section id="productos" className='container mt-5'>
          <div className='row'>
            {Data.productItems.map((productItem)=> (
              
              <div key='1' className='col-sm-12 col-md-6 col-lg-3 my-3'>
                <div className='card p-3 rounded'>
                  <img className='card-img-top mx-auto' src={productItem.image} alt='Raviolis'></img>
                  <div className='card-body d-flex flex-column'>
                    <h5 id='titulo_producto'><a href='http://localhost:3000'>{productItem.name}</a></h5>
                    <div className='rating mt-auto'>
                        <div className='rating-outer'>
                          <div className='rating-inner'></div>
                        </div>
                        <span id='No_de_opiniones'> 5 reviews</span>
                    </div>
                    <p className='card-text'>$ {productItem.price}</p><a class="btn btn-primary" href="http://localhost:3000/ProductsAdmin" role="button">Editar</a>
                </div>
              </div>
            </div>
))}  
          </div>

        </section>
    </Fragment>
  )
}

//export default ProductsAdm
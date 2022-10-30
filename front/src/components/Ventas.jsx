import ventas from './back/listaVentas.json'
import React from 'react';




export const Ventas = () => {
  //Sumar todas las ventas
  let total = 0;
  ventas.map(function (ventas) { 
    return  total += ventas.valor;
  })


  return (
    <div className='Ventas'>

              <h1 id='encabezado_productos' className='text-center'>Lista de Ventas</h1>
              <table class="table">
          <thead>
            <tr>
              <th scope="col">Fecha</th>
              <th scope="col">idVenta</th>
              <th scope="col">Valor</th>
                          </tr>
          </thead>
          <tbody>
            {
            ventas.map(function (ventas) {
                  return <tr> <th scope="row">{ventas.fecha}</th>
                    <th>{ventas.id}</th>
                    <th>{ventas.valor}</th></tr>;
                })
            
            
            }

            <tr>
              <th id='total' colSpan={2}>Total:</th>
              <th id='sumaTotal'>{total}</th>
            </tr>
                               

          </tbody>
        </table>
   </div>

  )
}

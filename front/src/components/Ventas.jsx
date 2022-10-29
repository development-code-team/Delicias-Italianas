import ventas from './back/listaVentas.json'
import React from 'react';



export const Ventas = () => {


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

          </tbody>
        </table>
   </div>

  )
}

import React, {Fragment, useEffect} from 'react';
import { useAlert} from 'react-alert'
import {useDispatch, useSelector} from 'react-redux'
import { getVentas } from '../actions/ventasActions';


export const Ventas = () => {
  const alert= useAlert();
  const {ventas, error}=useSelector(state => state.ventas)
  const dispath=useDispatch();

  useEffect(()=>{
    if (error){
        return alert.error(error)
    }

    dispath(getVentas());
}, [dispath, alert, error])




  //Sumar todas las ventas
  let total = 0;
  ventas && ventas.map(function (venta1) { 
    return  total += venta1.total;
  })


  return (

    <Fragment>
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
            ventas && ventas.map(venta => (
                  <tr> <th scope="row">{venta.fechaVenta}</th>
                    <th>{venta._id}</th>
                    <th>$ {venta.total}</th></tr>
                ))
            
            
            }

            <tr>
              <th id='total' colSpan={2}>Total:</th>
              <th id='sumaTotal' >$ {total}</th>
            </tr>
                               

          </tbody>
        </table>
   </div>
   </Fragment>

  )
}

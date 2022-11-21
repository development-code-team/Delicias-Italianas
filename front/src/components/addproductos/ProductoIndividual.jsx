import axios from 'axios'
import React, { useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
// Animaciones
import AOS from 'aos'
import 'aos/dist/aos.css'
// Mejores alertas
import Swal from 'sweetalert2'
import FileBase64 from 'react-file-base64';

// importa el producto de la lista de usarios 
function ProductoIndividual({producto}){


    const navegar = useNavigate()


   
    // Función para borrar producto
    function borrarproducto(id){
        axios.delete(`/api/deleteproducto/${id}`).then(res =>{
            Swal.fire('Felicidades', 'El producto se eliminó con exito')
            navegar(0)
          }).catch(err =>{
            console.log(err)
          })
    }


    return(
        <div>
            <div className='container'>
                <div className='row'>

                    <div className='col-sm-6 offset-3' >
                        <ul className='list-group'>
                            <li className='list-group-item'>{producto.nombre}</li>
                            <li className='list-group-item'>{producto.precio}</li>
                            <li className='list-group-item'>{producto.descripcion}</li>
                            <img className='list-group-item' src= {producto.imagen} ></img>
                            <li className='list-group-item'>{producto.inventario}</li>
                            <li className='list-group-item'>{producto.fechaCreacion}</li>
                        </ul>
                        
                        <div className='text-center mt-2'>
                            <Link to={`/editarproducto/${producto.idproducto}`}> <li className='btn btn-success'>Editar</li></Link>
                            
                            &nbsp;
                            <button className='btn btn-danger' onClick={()=>{borrarproducto(producto._id)}}> Borrar </button>
                            <hr className='mt-4'></hr>
                        </div>
                    </div>


                    
                </div>
            </div>
        </div>
    )
}

export default ProductoIndividual;
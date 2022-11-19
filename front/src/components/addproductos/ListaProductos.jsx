import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductoIndividual from './ProductoIndividual';

function ListaProductos(){

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
    
    // Mapear lista de productos en objeto producto, retorna el producto individual 
    const listaproductos = dataproductos.map(producto =>{
        return(
            <div key={producto}>
                <ProductoIndividual  producto={producto}/>
            </div>
        )

    })

    // retorna el título +  la listaproductos de arriba 
    return(
        <div >
            <h2 className='text-center'>Lista de Productos</h2>
            {listaproductos}
        </div>
    )
}

export default ListaProductos;
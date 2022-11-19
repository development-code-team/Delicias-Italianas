import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
//Unique id
import uniqid from 'uniqid'
// importar axios 
import axios from 'axios'
// Alertas bonitas
import Swal from 'sweetalert2'




function AgregarProductos(){
    
    // Hooks
    const[nombre, setNombre] = useState('')
    const[precio, setPrecio] = useState('')
    const[descripcion, setDescripcion] = useState('')
    const[imagen, setImagen] = useState('')
    const[inventario, setInventario] = useState('')

    function agregarProducto(){
        var producto ={
            nombre: nombre,
            precio: precio,
            descripcion: descripcion,
            imagen: imagen,
            inventario: inventario,
            fechaCreacion: Date.now,
            idproducto: uniqid()
        }
        console.log(producto)
        
        // En la carpeta package.json se tiene que agregar el proxy o dirección del backend, en este caso localhost:5000
        axios.post('/api/newproduct', producto)
        .then(res =>{
            Swal.fire('Felicidades', 'El producto se creó con exito')
        })
        .then(err => {console.log(err)})
    }

    return(

        <div className='container'>

            <div className='row'>
                <h2 className='text-center  '>Crear un nuevo Producto</h2>
            </div>
            
            <Form className='col-sm-6 offset-3'>
                <Form.Group className='mb-3' controlId='nombre'>
                    <Form.Label> Nombre </Form.Label>
                    <Form.Control type="text" placeholder="Ingrese un nombre" value={nombre} onChange={(e)=>{setNombre(e.target.value)}}></Form.Control>
                </Form.Group>
            </Form>

            <Form className='col-sm-6 offset-3'>
                <Form.Group className='mb-3' controlId='precio'>
                    <Form.Label> Precio </Form.Label>
                    <Form.Control type="number" placeholder="Ingrese un precio" value={precio} onChange={(e)=>{setPrecio(e.target.value)}}></Form.Control>
                </Form.Group>
            </Form>

            <Form className='col-sm-6 offset-3'>
                <Form.Group className='mb-3' controlId='descripción'>
                    <Form.Label> Descripcion </Form.Label>
                    <Form.Control type="text" placeholder="Ingrese una descripción" value={descripcion} onChange={(e)=>{setDescripcion(e.target.value)}}></Form.Control>
                </Form.Group>
            </Form>

            <Form className='col-sm-6 offset-3'>
                <Form.Group className='mb-3' controlId='imagen'>
                    <Form.Label> Imagen </Form.Label>
                    <Form.Control type="file" placeholder="Ingrese una imagen" value={imagen} onChange={(e)=>{setImagen(e.target.value)}}></Form.Control>
                </Form.Group>
            </Form>

            <Form className='col-sm-6 offset-3'>
                <Form.Group className='mb-3' controlId='inventario'>
                    <Form.Label> Inventario </Form.Label>
                    <Form.Control type="text" placeholder="Ingrese una cantidad" value={inventario} onChange={(e)=>{setInventario(e.target.value)}}></Form.Control>
                </Form.Group>
            </Form>

            
          
            <Form className='text-center'>
                <Button onClick={agregarProducto} variant="success" > Guardar producto </Button>
                <Button className="ml-2" href="/listaproductos" variant="success"> Visualizar productos </Button>
                
            </Form>

            
    


        </div>
    )
}

export default AgregarProductos;
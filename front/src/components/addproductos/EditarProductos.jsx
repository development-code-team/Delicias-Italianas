import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'
import FileBase64 from 'react-file-base64';


function EditarProductos(){


    const params = useParams()

    
    // Hooks
    const[nombre, setNombre] = useState('')
    const[precio, setPrecio] = useState('')
    const[descripcion, setDescripcion] = useState('')
    const[imagen, setImagen] = useState('')
    const[inventario, setInventario] = useState('')

    // Para volver atrás al index
    const navegar = useNavigate()


 
    useEffect(() => {
      axios.post('/api/getproducto', {idproducto:params.idproducto}).then(res =>{
        console.log(res.data[0])
        const dataproducto = res.data[0];
        setNombre(dataproducto.nombre)
        setPrecio(dataproducto.precio)
        setDescripcion(dataproducto.descripcion)
        setImagen(dataproducto.imagen)

        setInventario(dataproducto.inventario)


      })
    }, [params])



    // Función que actualiza
    function editarProducto(){
        // Nuevo objecto para actualizar el usuario
        const actualizarproducto = {
            nombre: nombre,
            precio: precio,
            descripcion: descripcion,
            imagen: imagen,
            inventario:inventario,
            idproducto: params.idproducto
        }

        // Petición usando axios
        axios.put(`/api/updateproducto`, actualizarproducto)
        .then(res =>{
            console.log(res.data)
            Swal.fire('Felicidades', 'El producto se actualizó con exito')
            navegar('/listaproductos')
        })
        .then(err => {console.log(err)})
    }
    

    return(
        <div className='container'>

            <div className='row'>
                <h2 className='text-center'>Editar Producto</h2>
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
                <Form.Group className='mb-3' controlId='descripcion'>
                    <Form.Label> Descripcion </Form.Label>
                    <Form.Control type="text"  placeholder="Ingrese una descripción" value={descripcion} onChange={(e)=>{setDescripcion(e.target.value)}}></Form.Control>
                </Form.Group>
            </Form>

            <Form className='col-sm-6 offset-3'>
                <Form.Group className='mb-3' controlId='imagen'>
                    <Form.Label> Imagen </Form.Label>
                    <div><FileBase64 multiple={ false } onDone={ ({base64})=> setImagen(base64)} /></div>
                </Form.Group>
            </Form>

            <Form className='col-sm-6 offset-3'>
                <Form.Group className='mb-3' controlId='Inventario'>
                    <Form.Label> Inventario </Form.Label>
                    <Form.Control type="text" placeholder="Ingrese una cantidad" value={inventario} onChange={(e)=>{setInventario(e.target.value)}}></Form.Control>
                </Form.Group>
            </Form>

            <Form className='text-center'>
                <Button  onClick={editarProducto} variant="success"> Editar Producto </Button>
            </Form>


        </div>
    )
}

export default EditarProductos;
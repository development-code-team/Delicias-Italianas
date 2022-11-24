import React, { Fragment, useState, useEffect } from 'react'
// Alertas bonitas
import MetaData from '../layout/MetaData'
// import Sidebar from './Sidebar'

import { newProduct, clearErrors } from '../../actions/productActions'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { NEW_PRODUCT_RESET } from '../../constants/productConstants'



//function AgregarProductos(){
const NewProduct = () => {
    const navigate= useNavigate();
    const[nombre, setNombre] = useState('');
    const[precio, setPrecio] = useState(0);
    const[descripcion, setDescripcion] = useState('');
    const[imagen, setImagen] = useState([]);
    const[inventario, setInventario] = useState('')
    const [imagenPreview, setImagenPreview] = useState([]);

 

    // function agregarProducto(){
    //     var producto ={
    //         nombre: nombre,
    //         precio: precio,
    //         descripcion: descripcion,
    //         imagen: imagen,
    //         inventario: inventario,
    //         fechaCreacion: Date.now,
    //         idproducto: uniqid()
    //     }
    //     console.log(producto)
        
        // En la carpeta package.json se tiene que agregar el proxy o dirección del backend, en este caso localhost:5000
        // axios.post('/api/newproduct', producto)
        // .then(res =>{
        //     Swal.fire('Felicidades', 'El producto se creó con exito')
        // })
        // .then(err => {console.log(err)})


    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, success } = useSelector(state => state.newProduct);

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (success) {
            navigate('/');
            alert.success('Producto creado exitosamente');
            dispatch({ type: NEW_PRODUCT_RESET })
        }

    }, [dispatch, alert, error, success])

    

        const submitHandler = (e) => {
            e.preventDefault();
    
            const formData = new FormData();
            formData.set('nombre', nombre);
            formData.set('precio', precio);
            formData.set('descripcion', descripcion);
            formData.set('inventario', inventario);
    
            imagen.forEach(img => {
                formData.append('imagen', img)
            })
    
            dispatch(newProduct(formData))
        }
    
        const onChange = e => {
    
            const files = Array.from(e.target.files)
    
            setImagenPreview([]);
            setImagen([])
    
            files.forEach(file => {
                const reader = new FileReader();
    
                reader.onload = () => {
                    if (reader.readyState === 2) {
                        setImagenPreview(oldArray => [...oldArray, reader.result])
                        setImagen(oldArray => [...oldArray, reader.result])
                    }
                }
    
                reader.readAsDataURL(file)
            })
        }
    return(

        <Fragment>
        <MetaData title={'Nuevo Producto'} />
        <div className="row">
            {/*<div className="col-12 col-md-2">
                <Sidebar />
            </div>*/}

            <div className="col-12 col-md-12">
                <Fragment>
                    <div className="wrapper my-5">
                        <form className="shadow" onSubmit={submitHandler} encType='multipart/form-data'>
                            <h1 className="mb-4">Nuevo Producto</h1>

                            <div className="form-group">
                                <label htmlFor="name_field">Nombre</label>
                                <input
                                    type="text"
                                    id="name_field"
                                    className="form-control"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="price_field">Precio</label>
                                <input
                                    type="text"
                                    id="price_field"
                                    className="form-control"
                                    value={precio}
                                    onChange={(e) => setPrecio(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="description_field">Descripción</label>
                                <textarea className="form-control" 
                                id="description_field" 
                                rows="8" 
                                value={descripcion} 
                                onChange={(e) => setDescripcion(e.target.value)}></textarea>
                            </div>

                            
                            <div className="form-group">
                                <label htmlFor="stock_field">Inventario</label>
                                <input
                                    type="number"
                                    id="stock_field"
                                    className="form-control"
                                    value={inventario}
                                    onChange={(e) => setInventario(e.target.value)}
                                />
                            </div>

                        

                            <div className='form-group'>
                                <label>Imágenes</label>

                                <div className='custom-file'>
                                    <input
                                        type='file'
                                        name='product_images'
                                        className='custom-file-input'
                                        id='customFile'
                                        onChange={onChange}
                                        multiple
                                    />
                                    <label className='custom-file-label' htmlFor='customFile'>
                                        Seleccione Imágenes
                                    </label>
                                </div>

                                {imagenPreview.map(img => (
                                    <img src={img} key={img} alt="Images Preview" className="mt-3 mr-2" width="55" height="52" />
                                ))}

                            </div>


                            <button
                                id="login_button"
                                type="submit"
                                className="btn btn-block py-3"
                                disabled={loading ? true : false}
                            >
                                CREAR
                            </button>

                        </form>
                    </div>
                </Fragment>
            </div>
        </div>

    </Fragment>
    )
}

export default NewProduct;




